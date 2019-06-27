import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import ReactTable from 'react-table';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopBar from "./HomeComponents/TopBar";
import NavBar from "./SearchComponents/NavBar";
import SearchBar from "./SearchComponents/SearchBar";
import MiddleBar from "./RegisterComponents/MiddleBar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'
import modal from './SearchComponents/Modal';

const styles = {
	SForm:{
		background : "#FDE4F2",
		'border-style' : "Solid",
		'border-color' : "#F9CEE7",
		'border-width' : "1px",
		position : "absolute",
		padding: "20px",
		left : "4%",
		top : "270px",
		width : "30%",
		'border-radius' : "8px",
		'-moz-border-radius' : "8px",
		'-webkit-border-radius' : "8px",
	},
	ResultGrid:{
		position : "absolute",
		padding: "20px",
		left : "36%",
		top : "270px",
		width : "60%",
		'border-radius' : "8px",
		'-moz-border-radius' : "8px",
		'-webkit-border-radius' : "8px",
	},
	Title:{ 
		position : "absolute",
		left : "5%",
		top : "210px",
		color: "#F90B6D", 
		'font-family': "Open Sans, sans-serif",
		'font-size': "34px", 
		'font-weight': "300",
		'line-height': "40px",
		margin:"0 0 16px"
	},
	ModalBack:{
		left : "15%",
		top : "800px",
	},
	value:{
		'margin-left' : "-15px",
	},
	titlestyle:{
		'padding-bottom' : "20px"
	}

};

class Search extends Component {
	constructor () {
		super()
		this.state = {
			query: 'username',
			value: null,
			operator: ':',
			data: [],
			selected: {
				username: "",
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				roles: [],
				notLocked: true
			},
			show: false
		}

		this.handleForm = this.handleForm.bind(this);
	    this.handleShow = this.handleShow.bind(this);
   		this.handleClose = this.handleClose.bind(this);
	}

	handleChange (event) {
		console.log(event.target);
		this.setState( {[event.target.name]: event.target.value} )
		console.log(event.target.value);
	}

    handleClose() {
    	this.setState({ show: false });
 	}

  	handleShow() {
    	this.setState({ show: true });
  	}

	handleForm (e) {
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
			console.log(response)
			parent.setState({data: response.data});
		})
		;
	}
	handleSave(){
				const cookies = new Cookies(); 
		axios.post('https://localhost:8443/Employee/Users',
		{
			data: this.state.selected,
			headers:{
				"Authorization":"Bearer "+ cookies.get('token'),
				'Accept' : 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(function(){
			this.setState({ show: false });
		});
	}

	fetchUserDetails = (e) => {
		var parent = this;
		var data = [];
	    var target = e.srcElement || e.target;
	    while (target && target.nodeName !== "TR") {
	    	target = target.parentNode;
	    }
	    if (target) {
	    	var cells = target.getElementsByTagName("td");
	    	console.log(cells);
	    	for (var i = 0; i < cells.length; i++) {
	    		data.push(cells[i].innerHTML);
	    	}
	    }
  		console.log(data);
  		parent.setState({selected: data});
  		this.handleShow();
}

	renderRow = () => {
		return this.state.data.map(data  => {
			return(<tr>
				<td>{data.username}</td>
				<td>{data.email}</td>
				<td>{data.firstName}</td>
				<td>{data.lastName}</td>
				<td>{data.phone}</td>
				<td>{data.roles}</td>
				</tr>
				)}
			);
	}

	render () {
		return (
			<div>
			<TopBar/>
			<MiddleBar/>
			<NavBar/>
			<Form style={styles.SForm} onSubmit={this.handleForm}>
			<h3 style={styles.titlestyle}>Search user</h3>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridQuery">
						<Form.Label>Criteria</Form.Label>
						<Form.Control as="select" name="query" style={styles.query} onChange={event => this.handleChange(event)}>
							<option name="username">username</option>
							<option name="email">email</option>
							<option name="roles">roles</option>
							<option name="firstName">firstName</option>
							<option name="lastName">lastName</option>
						</Form.Control>
					</Form.Group>

						<Form.Group as={Col} controlId="formGridOperator">
						<Form.Label>Operator</Form.Label>
						<Form.Control as="select" name="operator"  style={styles.operator} onChange={event => this.handleChange(event)}>
							<option name=":">:</option>
							<option name="!">!</option>
							<option name=">">></option>
							<option name="<">&lt;</option>
							<option name="~">~</option>
						</Form.Control>
					</Form.Group>
				</Form.Row>
					<Form.Group as={Col} controlId="formGridValue">
						<Form.Label style={styles.value}>Value</Form.Label>
						<Form.Control type="text" name="value" style={styles.value} placeholder="Enter search value" onChange={event => this.handleChange(event)} />
					</Form.Group>

				<Button variant="success" type="submit">
					Search
				</Button>
			</Form>

			<Table striped bordered hover style={styles.ResultGrid} onClick={event => this.fetchUserDetails(event)} pagination={true}>
				<thead>
					<tr>
						<th>Username</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Phone</th>
						<th>Roles</th>
					</tr>
				</thead>
				<tbody>
					{this.renderRow()}
				</tbody>
			</Table>

	      <div style={styles.ModalBack}>
	        <Modal show={this.state.show} onHide={this.handleClose}>
	          <Modal.Header closeButton>
	            <Modal.Title> {this.state.selected[0]}</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>

      <Form style={styles.Form}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstName" placeholder="Enter first name" defaultValue={this.state.selected[2]} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" placeholder="Enter last name" defaultValue={this.state.selected[3]}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" defaultValue={this.state.selected[1]} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="Enter phone number" defaultValue={this.state.selected[4]}/>
          </Form.Group>
        </Form.Row>

        <Form.Row>
         <Form.Group as={Col} controlId="formGridActive">
            <Form.Check type="checkbox" label="Deactivate account" />
          </Form.Group>

            <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" name="roles" onChange={event => this.handleChange(event)} defaultValue={this.state.selected[5]}>
              <option>ROLE_CUSTOMER</option>
              <option>ROLE_EMPLOYEE</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Button variant="primary" onClick={this.handleSave}>
	        Save Changes
	    </Button>
      </Form>

	          </Modal.Body>
	        </Modal>
	      </div>
			</div>

			)
	}
}
export default Search