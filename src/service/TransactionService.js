import axios from 'axios';
import Cookies from 'universal-cookie';

class TransactionService {

    //employees only
    getTransactionsFromAccount(account) {
        console.log('transactions called')
        const cookies = new Cookies(); 
        return axios.get(`https://localhost:8443/Customer/${account}/Transactions`, 	
        	{  method: 'GET',
			headers:{
				"Authorization":"Bearer "+ cookies.get('token'),
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		});
    }

    createTranssactionFlow(request){
        const cookies = new Cookies(); 
        fetch('https://localhost:8443/Customer/Transactions', {
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

export default TransactionService;