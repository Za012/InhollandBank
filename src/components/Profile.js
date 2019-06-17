import React, { Component } from 'react'
import './App.css'
import '../service/AccountService'
import Cookies from 'universal-cookie';
import ReactTable from 'react-table';

class Profile extends Component {
	constructor () {
		super()
		this.state = {
			accounts: []
		}
		this.handleClick = this.handleClick.bind(this)
	}

    
    componentDidMount() {
        AccountService.executeAccountService()
        .then(response => this.setState({ accounts: response.data }))
        .catch(this.setState({ accounts: 'Error Processing Request' }))
    }
    

	render () {
    return (
      <div className='profile_container'>
		  <ReactTable
		  	columns ={columns}
		  	data={this.state.data}
		  >
		  </ReactTable>
      </div>
      )
  }
}
export default Profile