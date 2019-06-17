import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import AuthService from './AuthService';

class RegisterUser extends Component {
	constructor () {
		super()
		this.state = {
			roles: null,
			firstName: null,
			lastName: null,
			email: null,
			phone: null,
			username: null,
			password: null,
			dateCreated: null,
			birthday: null
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	handleClick (e) {
		var parent = this;
		var url = 'https://localhost:8443/Employee/Users';
		if(this.state.query != null && this.state.value != null){
			url += this.state.query+this.state.operator+this.state.value;
		}
		e.preventDefault();
      	const cookies = new Cookies(); 

      	fetch(url,{
      		method: 'POST',
      		headers:{
      			"Authorization": "Bearer "+cookies.get('token'),
      			'Accept' : 'application/json',
      			'Content-Type': 'application/json'
      		},
      		body: JSON.stringify(this.state)
      	});
	}

	render () {
    return (
      <div className='register_container'>
		  <h2>Create a user!</h2>
		  <form id="register_window" className="register_form" name="register" onSubmit={this.handleClick}>
		      <input type="text" id="roles" title="roles"  name="roles" 
		      onChange={event => this.handleChange(event)} placeholder="roles" />
		      <input type="firstName" id="firstName" title="firstName"  name="firstName" 
		      onChange={event => this.handleChange(event)} placeholder="firstName" />
			  <input type="lastName" id="lastName" title="lastName"  name="lastName" 
		      onChange={event => this.handleChange(event)} placeholder="lastName" />
		      <input type="email" id="email" title="email"  name="email" 
		      onChange={event => this.handleChange(event)} placeholder="email" />
		      <input type="phone" id="phone" title="phone"  name="phone" 
		      onChange={event => this.handleChange(event)} placeholder="phone" />
		      <input type="username" id="username" title="username"  name="username" 
		      onChange={event => this.handleChange(event)} placeholder="username" />
		      <input type="password" id="password" title="password"  name="password" 
		      onChange={event => this.handleChange(event)} placeholder="password" />
		      <input type="date" id="birthday" title="birthday"  name="birthday" 
		      onChange={event => this.handleChange(event)} placeholder="birthday" />
		      <input type="date" id="dateCreated" title="dateCreated"  name="dateCreated" 
		      onChange={event => this.handleChange(event)} placeholder="dateCreated" />
		      <button type="submit" className="register" name="register_btn">Register!</button>
		  </form>
      </div>
      )
  }
}
export default RegisterUser