import axios from 'axios'

class TransactionService {

    //employees only
    getAllTransactions() {
        return axios.get(`https://localhost:8443/Employee/Transactions`);
    }

}