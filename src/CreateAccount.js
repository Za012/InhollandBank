import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import TopBar from "./HomeComponents/TopBar";
import NavBar from "./RegisterComponents/NavBar";
import MiddleBar from "./RegisterComponents/MiddleBar";
import UserService from "./service/UsersService";
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
    top : "730px",
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
   },

   Title2:{ 
    position : "absolute",
    left : "5%",
    top : "700px",
  	color: "#F90B6D", 
  	'font-family': "Open Sans, sans-serif",
  	'font-size': "34px", 
  	'font-weight': "300",
  	'line-height': "40px",
  	margin:"0 0 16px"
   }
};

class CreateAccount extends Component {
	constructor (props) {
		super(props)
		this.state = {
			countryCode: null,
			bank: null,
			user: null,
			name: null,
			balance: null,
			type: null,
			dailyLimit: null,
      interestRate: null,
      users: []
		}
    this.handleClick = this.handleClick.bind(this) 
    this.UserService = new UserService()
    this.AccountService = new AccountService()
  }
  
  componentDidMount(){
    this.UserService.getAllUsers().then(response => {this.setState({ users : response.data})});
    console.log(this.state.users);

  }

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	handleClick (e) {

    console.log(this.state);
    e.preventDefault();
    this.AccountService.createAccount(JSON.stringify(this.state));
  }

  handleCurrent(e){

    this.setState({ type : "current"});
    if(this.state.countryCode == null) this.setState({ countryCode : "NL"});
    if(this.state.user == null) this.setState({ user : this.state.users[0].username});
    if(this.state.name == null) this.setState({ name : "Account"});
    if(this.state.bank == null) this.setState({ bank : "INHO"});
    

    const request = {
      type : 'current',
      countryCode: this.state.countryCode,
      user : this.state.user,
      name: this.state.name,
      bban: this.state.bban,
      bank: this.state.bank,
      balance: this.state.balance,
      dailyLimit: this.state.dailyLimit
    }

    e.preventDefault();

    this.AccountService.createAccount( JSON.stringify(request));

    this.props.history.push(`/Employee/AccountsSearch`);
  }

  handleSavings(e){

    this.setState({ type : "savings"});
    if(this.state.countryCode == null) this.state.countryCode = 'NL';
    if(this.state.user == null) this.state.user = this.state.users[0];
    if(this.state.name == null) this.state.name = "Account";
    if(this.state.bank == null) this.state.bank = "INHO";

    let request = {
      type : 'savings',
      countryCode: this.state.countryCode,
      user : this.state.user,
      name: this.state.name,
      bban: this.state.bban,
      bank: this.state.bank,
      balance: this.state.balance,
      interestRate: this.state.interestRate
    }

    e.preventDefault();

    this.AccountService.createAccount(JSON.stringify(request));

    this.props.history.push(`/Employee/AccountsSearch`);
  }

  
  
	render () {
    return (
        <div>
          <TopBar/>
          <MiddleBar/>
          <NavBar/>

          <h2 style={styles.Title}>Create a new current account</h2>

          <Form style={styles.Form} onSubmit={event => this.handleCurrent(event)} id="CurrentsForm">
          
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCountryCode">
                  <Form.Label>Country Code</Form.Label>
                  <Form.Control as="select" name="countryCode" value="Select an option" onChange={event => this.handleChange(event)}>
                  <option>Select country</option>
                    <option>NL</option>
                    <option>BE</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBank">
                  <Form.Label>Bank</Form.Label>
                  <Form.Control as="select" name="bank" onChange={event => this.handleChange(event)}>
                  <option>Select bank</option>
                    <option>INHO</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBban">
                  <Form.Label>BBAN (Optional)</Form.Label>
                  <Form.Control type="number" pattern="(?=.*[0-10]).{8,}" name="bban" onChange={event => this.handleChange(event)} placeholder="0000000000 or leave empty for random" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUser">
                  <Form.Label>User</Form.Label>
                  <Form.Control as="select" name="user" required onChange={event => this.handleChange(event)}>
                      {
                        this.state.users.map(user  => {
                          return(
                            <option value={user.username}>{user.username}</option>
                          )}
                        )
                      }
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                  <Form.Label>Account Name</Form.Label>
                  <Form.Control type="text" required name="name" onChange={event => this.handleChange(event)} placeholder="Enter account's name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBalance">
                  <Form.Label>Enter initial balance</Form.Label>
                  <Form.Control type="text" required name="balance" onChange={event => this.handleChange(event)} placeholder="Enter initial balance" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                  <Form.Group as={Col} controlId='formGridDailyLimit' id='dailyLimit'>
                    <Form.Label>Daily limit</Form.Label>
                    <Form.Control type='text' required name='dailyLimit' onChange={event => this.handleChange(event)} placeholder='Enter daily limit' />
                  </Form.Group>
              </Form.Row>

              <Button variant="success" type="submit">
                Submit
              </Button>
            </Form>

            <h2 style={styles.Title2}>Create a new savings account</h2>

          <Form style={styles.Form2} onSubmit={event => this.handleSavings(event)} id="SavingsForm">
          
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCountryCode">
              <Form.Label>Country Code</Form.Label>
              <Form.Control as="select" required name="countryCode" onChange={event => this.handleChange(event)}>
                <option>NL</option>
                <option>BE</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBank">
              <Form.Label>Bank</Form.Label>
              <Form.Control as="select" name="bank" onChange={event => this.handleChange(event)}>
                <option>INHO</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBban">
              <Form.Label>BBAN (Optional)</Form.Label>
              <Form.Control type="text" name="bban" onChange={event => this.handleChange(event)} placeholder="0000000000 or leave empty for random" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUser">
              <Form.Label>User</Form.Label>
              <Form.Control as="select" required name="user" onChange={event => this.handleChange(event)}>
                      {
                        this.state.users.map(user  => {
                          return(
                            <option value={user.username}>{user.username}</option>
                          )}
                        )
                      }
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Account Name</Form.Label>
              <Form.Control type="text" required name="name" onChange={event => this.handleChange(event)} placeholder="Enter account's name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBalance">
              <Form.Label>Enter initial balance</Form.Label>
              <Form.Control type="text" required name="balance" onChange={event => this.handleChange(event)} placeholder="Enter initial balance" />
            </Form.Group>
          </Form.Row>

          <Form.Row> 
              <Form.Group as={Col} controlId='formGridInterestRate' id='interestRate'>
                <Form.Label>Interest rate</Form.Label>
                <Form.Control type='text' required name='interestRate' onChange={event => this.handleChange(event)} placeholder='Enter interest rate' />
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
export default CreateAccount