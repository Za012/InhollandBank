import axios from 'axios'

class UserService {

    getUser(username) {
        return axios.get(`https://localhost:8443/Employee/Users?search="username":${username}`);
    }

}