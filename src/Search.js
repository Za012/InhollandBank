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

const styles = {
  Form:{
    background : "#FDE4F2",
    'border-style' : "Solid",
    'border-color' : "#F9CEE7",
    'border-width' : "1px",
    position : "absolute",
    padding: "20px",
    left : "15%",
    top : "300px",
    width : "70%",
    'border-radius' : "8px",
    '-moz-border-radius' : "8px",
    '-webkit-border-radius' : "8px",
  },
    ResultGrid:{

    position : "relative",
    padding: "20px",
    left : "15%",
    top : "500px",
    width : "70%",
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
   }
};

class Search extends Component {
	constructor () {
		super()
		this.state = {
			query: 'username',
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

  renderRow = () => {
	return this.state.data.map(data  => {
      return(<tr>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>{data.first_name}</td>
        <td>{data.last_name}</td>
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
	  <h2 style={styles.Title}>Search</h2>
      <Form style={styles.Form} onSubmit={this.handleClick}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridQuery">
            <Form.Label>Criteria</Form.Label>
            <Form.Control as="select" name="query" onChange={event => this.handleChange(event)}>
              <option name="username">Username</option>
              <option name="email">Email</option>
              <option name="roles">Role</option>
              <option name="firstName">First name</option>
              <option name="lastName">Last name</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridValue">
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" name="value" placeholder="Enter search value" onChange={event => this.handleChange(event)} />
          </Form.Group>
        </Form.Row>

        <Button variant="success" type="submit">
          Search
        </Button>
      </Form>

        <Table striped bordered hover style={styles.ResultGrid}>
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
      </div>
      )
  }
}
export default Search