import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import TopBar from "./HomeComponents/TopBar";
import NavBar from "./RegisterComponents/NavBar";
import MiddleBar from "./RegisterComponents/MiddleBar";

const styles = {
  Form:{
    background : "#FDE4F2",
    'border-style' : "Solid",
    'border-color' : "#F9CEE7",
    'border-width' : "1px",
    position : "absolute",
    padding: "20px",
    left : "15%",
    top : "330px",
    width : "70%",
    'border-radius' : "8px",
    '-moz-border-radius' : "8px",
    '-webkit-border-radius' : "8px"
  },
  Title:{
    position : "absolute",
  	top: "220px"
  }
};

class RegisterUser extends Component {
	constructor () {
		super()
		this.state = {
			roles: "ROLE_CUSTOMER",
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
		this.state.dateCreated = new Date().toLocaleString()
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
    	<div>
	  <TopBar/>
	  <MiddleBar/>
	  <NavBar/>
	  <h2 style={styles.Title}>Create a user!</h2>
      <Form style={styles.Form} onSubmit={this.handleClick}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" name="roles" onChange={event => this.handleChange(event)}>
              <option>ROLE_CUSTOMER</option>
              <option>ROLE_EMPLOYEE</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" onChange={event => this.handleChange(event)} placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" onChange={event => this.handleChange(event)} placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={event => this.handleChange(event)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" name="phone" onChange={event => this.handleChange(event)} placeholder="Enter phone number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBirth">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date" name="birthday" onChange={event => this.handleChange(event)} placeholder="Enter birthday" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
         <Form.Group as={Col} controlId="formGridUserame">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" onChange={event => this.handleChange(event)} placeholder="Enter username" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={event => this.handleChange(event)} placeholder="Password" />
           </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      )
  }
}
export default RegisterUser