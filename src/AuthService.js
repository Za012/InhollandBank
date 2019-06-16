import decode from 'jwt-decode';
import Cookies from 'universal-cookie';

export default class AuthService {
    // Initializing important variables

    constructor(domain) {
        this.domain = 'https://localhost:8443' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.state = {
          cookies: new Cookies()
      }

        const cookies = new Cookies(); 
    }

    login(username, password) {
        // Get a token from api server using the fetch api
        return this.fetch(`${this.domain}/Login?username=${username}&password=${password}`, {
            method: 'POST'
            // body: JSON.stringify({
            //     username,
            //     password
            // })
        }).then(res => {
         console.log(res.token);
           this.setToken(res.token)// Setting the token in cookie
           this.setUserRoles();
           return Promise.resolve(res);
       })
    }

    setUserRoles(){
        var parent = this;
        this.fetch(`${this.domain}/me`)
        .then(function(response){
            parent.state.cookies.set('user', response, { path: '/' });
            console.log(parent.state.cookies.get('user'));
        });
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.state.cookies.get('token') // Getting token from cookie
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to cookie
        //localStorage.setItem('id_token', idToken)
       // var data = "Bearer "+idToken;
       this.state.cookies.set('token', idToken, { path: '/' });
   }

   getToken() {
        // Retrieves the user token from localStorage
        return this.state.cookies.get('token') 
        //return localStorage.getItem('id_token')
    }

    logout() {
        // Clear user token and profile data from localStorage
        //localStorage.removeItem('id_token');
        this.state.cookies.remove('token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return decode(this.getToken());
    }


    fetch(url, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
        .then(this._checkStatus)
        .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}
