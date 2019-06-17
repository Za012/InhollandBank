import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import ReactTable from 'react-table';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterUser from './RegisterUser';

class Search extends Component {
	constructor () {
		super()
		this.state = {
			query: null,
			value: null,
			operator: ':',
			data: []
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	handleClick (e) {
		var parent = this;
		var url = 'https://localhost:8443/Employee/Users?search=';
		if(this.state.query != null && this.state.value != null){
			url += this.state.query+this.state.operator+this.state.value;
		}
		e.preventDefault();
      	const cookies = new Cookies(); 
		axios.get(url,
		{
			headers:{
				"Authorization":"Bearer "+ cookies.get('token'),
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		}
		)
		.then(function(response){
			parent.setState({data: response.data});
			console.log(response.data);
		})
		;
	}

	redirect(){
		this.props.history.replace('/Employee/RegisterUser')
	}



	render () {
		const columns = [
		{
			Header: "Username",
			accessor: "username"	
		},
		{
			Header: "Email",
			accessor: "email"	
		},
		{
			Header: "First Name",
			accessor: "first_name"	
		},
		{
			Header: "Last Name",
			accessor: "last_name"	
		},
		{
			Header: "Phone",
			accessor: "phone"	
		}


		]
    return (
      <div className='search_container'>
		  <h2>Search anything you want!</h2>
		  <form id="search_window" className="search_form" name="search" onSubmit={this.handleClick}>
		      <input type="text" id="query" title="query"  name="query" 
		      onChange={event => this.handleChange(event)} placeholder="query" />
		      <input type="text" id="value" title="value"  name="value" 
		      onChange={event => this.handleChange(event)} placeholder="value" />
		      <button type="submit" className="run" name="run">Search!</button>
		  </form>

		  <ReactTable
		  	columns ={columns}
		  	data={this.state.data}
		  >
		  </ReactTable>
      </div>
      )
  }
}
export default Search