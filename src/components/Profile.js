import React, { Component } from 'react'
import '../App.css'
import Cookies from 'universal-cookie';
import ReactTable from 'react-table';
import axios from 'axios'

class Profile extends Component {
	constructor () {
		super()
		this.state = {
			accounts: []
		}
	}

    
    componentDidMount() {
    	const cookies = new Cookies();
    	axios.get(`https://inhollandbank.herokuapp.com/Employee/Accounts`,
		{
			headers:{
				"Authorization":"Bearer "+ cookies.get('token'),
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		})
        .then(response => this.setState({ accounts: response.data }))
        .catch(this.setState({ accounts: 'Error Processing Request' }));

    }
    

	render () {
		const columns = [
		{
			Header: "Balance",
			accessor: "balance"	
		}
		]
    return (
      <div className='profile_container'>
		  <ReactTable
		  	columns ={columns}
		  	data={this.state.accounts}
		  >
		  </ReactTable>
      </div>
      )
  }
}
export default Profile