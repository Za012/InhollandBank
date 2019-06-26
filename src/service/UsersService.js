import axios from 'axios'
import Cookies from 'universal-cookie';

class UserService {

    getUser(username) {
        return axios.get(`https://localhost:8443/Employee/Users?search="username":${username}`);
    }

    getAllUsers() {
        console.log('users called')
        const cookies = new Cookies(); 
        return axios.get(`https://localhost:8443/Employee/Users`, 	
        	{  method: 'GET',
			headers:{
				"Authorization":"Bearer "+ cookies.get('token'),
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		});
    }

}

export default UserService;