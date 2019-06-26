import axios from 'axios'
import Cookies from 'universal-cookie';

class AccountService {

    //employees only
    getAllAccounts() {
        return axios.get(`https://localhost:8443/Employee/Accounts`);
    }

    createAccount(request){
        const cookies = new Cookies(); 
        fetch('https://localhost:8443/Employee/Accounts', {
            method: 'POST',
            headers:{
                "Authorization": "Bearer "+cookies.get('token'),
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: request
        });
      	
    }

}

export default AccountService;