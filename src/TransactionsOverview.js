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
import AuthService from './AuthService';
import TransactionService from './service/TransactionService';
import './AccountOverview.css';
import CreateTransaction from "./CreateTransaction";
import {Link} from 'react-router-dom';

const styles = {
  border:{
    background : "#FDE4F2",
    'border-style' : "Solid",
    'border-color' : "#F9CEE7",
    'border-width' : "1px",
    position : "absolute",
    padding: "150px",
    top : "170px",
    width : "100%",
    'border-radius' : "8px",
    '-moz-border-radius' : "8px",
    '-webkit-border-radius' : "8px",
    textAlign:'center',
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

class TransactionsOverview extends Component {
	constructor (props) {
		super(props)

    this.TransactionService = new TransactionService()

    this.state = {
			transactions: []
    }
    this.TransactionService.getTransactionsFromAccount(this.props.location.state.accountId).then(response => {this.setState({ transactions : response.data})});

    console.log(this.state.transactions)
  }
  
  componentDidMount(){
  }

	handleChange (event) {
		this.setState( {[event.target.name]: event.target.value} )
	}

	render () {
    return (
        <div>
          <TopBar/>
          <MiddleBar/>
          <NavBar/>
            <div style={styles.border}>
              <ul>
                {this.state.transactions.map(trans  => {
                  return(
                    <div>
                      <li>{trans.sender.ibanCode}  =====>  €{trans.amount}  =====>  €{trans.receiver.ibanCode} </li>
                    </div>)})}
              </ul>
            </div>
          </div>
    )
    
  }

}
export default TransactionsOverview