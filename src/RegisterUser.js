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
    left : "5%",
    top : "220px",
  	color: "#F90B6D", 
  	'font-family': "Open Sans, sans-serif",
  	'font-size': "34px", 
  	'font-weight': "300",
  	'line-height': "40px",
  	margin:"0 0 16px"
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
		this.errorMessage = {
			nameError: "",
			birthdayError: "",
			phoneError: "",
			usernameError:"",
			passwordError:"",
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}
	validate(){
		let validated = true;
		this.errorMessage.phoneError = "";
		this.errorMessage.usernameError = "";
		this.errorMessage.passwordError = "";

		var regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
		if(!regex.test(this.state.phone)){
			this.errorMessage.phoneError = "Phone number is incorrect";
			validated = false;
		}
		regex = /^[a-zA-Z0-9]+$/;
		if(!regex.test(this.state.username)){
			this.errorMessage.usernameError = "Username may NOT start/end with -._ or any other non alphanumeric character"
			validated = false;
		}
		regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
		if(!regex.test(this.state.password)){
			this.errorMessage.passwordError = "Password is required to have a minimum of eight characters, at least one letter and one number";
			validated = false;
		}
		if(this.state.birthday == ""){
			this.errorMessage.birthdayError = "Please enter a birthday";
			validated = false;
		}
		if(this.state.firstName == "" && this.state.lastName == ""){
			this.errorMessage.nameError = "Please enter your names";
			validated = false;
		}
		console.log(this.errorMessage);
		return validated;
	}
	handleClick (e) {
		e.preventDefault();
		if(!this.validate()){
			e.stopPropagation();
			return;
		}

		this.state.dateCreated = new Date().toLocaleString()
		var parent = this;
		var url = 'https://localhost:8443/Employee/Users';
		if(this.state.query != null && this.state.value != null){
			url += this.state.query+this.state.operator+this.state.value;
		}
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
	  <h2 style={styles.Title}>Register a user</h2>
      <Form style={styles.Form} 
      	onSubmit={this.handleClick}>
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
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
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
<div>
      <div style={{fontSize: 12, color: "red"}}>
      	{this.errorMessage.passwordError}
      </div>
      <div style={{fontSize: 10000, color: "red"}}>
      	{this.errorMessage.phoneError}
      </div>
      <div style={{fontSize: 12, color: "red"}}>
      	{this.errorMessage.usernameError}
      </div>
</div>
      </div>
      )
  }
}
export default RegisterUser