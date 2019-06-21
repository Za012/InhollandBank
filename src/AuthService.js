import decode from 'jwt-decode';
import Cookies from 'universal-cookie';

export default class AuthService {

    constructor(domain) {
        this.domain = 'https://localhost:8443' // API server domain
        this.fetch = this.fetch.bind(this) // React binding stuff
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.state = {
          cookies: new Cookies()
      }

        this.state.cookies = new Cookies(); 
    }

    login(username, password) {
        var details = {
            'username': username,
            'password': password
        };

        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        var data ={
            body: formBody,
            method: 'post'
        };
        return this.fetch(`${this.domain}/Login`, data)
        .then(res => {
           this.setToken(res.token)// Setting the token in cookie
           var roles = this.setUserRoles();
           return Promise.resolve(res, roles);
       })
    }

    setUserRoles(){
        var parent = this;

        this.fetch(`${this.domain}/me`)
        .then(function(response){
            parent.state.cookies.set('user', response, { path: '/' });
            return response.roles;
        });
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.state.cookies.get('token') // Getting token from cookie
        return !!token && !this.isTokenExpired(token) 
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
       this.state.cookies.set('token', idToken, { path: '/' });
   }

   getToken() {
        // Retrieves the user token from cookies
        return this.state.cookies.get('token') 
    }

    logout() {
        // Clear user token and profile data from cookies
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
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
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
