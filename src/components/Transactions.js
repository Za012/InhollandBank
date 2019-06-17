import React, { Component } from 'react'
import './App.css'
import '../service/TransactionService'
import Cookies from 'universal-cookie';
import ReactTable from 'react-table';

class Profile extends Component {
	constructor () {
		super()
		this.state = {
			transactions: []
		}
		this.handleClick = this.handleClick.bind(this)
	}

    componentDidMount() {
        TransactionService.getAllTransactions()
        .then(response => this.setState({ transactions: transactions.data }))
        .catch(this.setState({ transactions: 'Error Processing Request' }))
    }
    

	render () {
    return (
      <div className='transaction_container'>
		  <ReactTable
		  	columns ={columns}
		  	data={this.state.data}
		  >
		  </ReactTable>
      </div>
      )
  }
}
export default Transactions