import axios from 'axios'

class AccountService {

    //employees only
    getAllAccounts() {
        return axios.get(`https://localhost:8443/Employee/Accounts`);
    }

}