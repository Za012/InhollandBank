import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import TopBar from "./HomeComponents/TopBar";
import NavBar from "./RegisterComponents/NavBar";
import MiddleBar from "./RegisterComponents/MiddleBar";
import TransactionService from "./service/TransactionService";
import AccountService from "./service/AccountService";

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
  Form2:{
    background : "#FDE4F2",
    'border-style' : "Solid",
    'border-color' : "#F9CEE7",
    'border-width' : "1px",
    position : "absolute",
    padding: "20px",
    left : "15%",
    top : "700px",
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

class CreateTransaction extends Component {
	constructor (props) {
		super(props)
		this.state = {
      amount: null,
      receiver: null,
      category: null,
      creator : this.props.location.state.creator,
      sender : this.props.location.state.sender,
      type :  this.props.location.state.type,
      
    }
    
    this.handleClick = this.handleClick.bind(this) 
    this.TransactionService = new TransactionService()
  }
  
  componentDidMount () {
    console.log(this.state)

  }

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	handleClick (e) {

    console.log(this.state);
    e.preventDefault();

    this.TransactionService.createTranssactionFlow( JSON.stringify(this.state));
  }


 
  
	render () {
    return (
        <div>
          <TopBar/>
          <MiddleBar/>
          <NavBar/>

          <h2 style={styles.Title}>Sending from {this.props.location.state.sender}</h2>

          <Form style={styles.Form} onSubmit={event => this.handleClick(event)} id="CurrentsForm">
          
              <Form.Row>

              <Form.Group as={Col} controlId="formGridBban">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control type="number"  name="amount" onChange={event => this.handleChange(event)} placeholder="0000000.00" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCategory">
                  <Form.Label>Bank</Form.Label>
                  <Form.Control as="select" name="category" onChange={event => this.handleChange(event)}>
                  <option>Select category</option>
                    <option>OTHER</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridReceiver">
                  <Form.Label>Send to</Form.Label>
                  <Form.Control type="text" name="receiver" onChange={event => this.handleChange(event)} placeholder="NL00INHO0000000000" />
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
export default CreateTransaction