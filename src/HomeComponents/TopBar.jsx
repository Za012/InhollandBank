import React, { PureComponent } from "react";
import ListBody from "./ListBody";
import Button from 'react-bootstrap/Button';
import Logo from '../Resources/img/HomeLogo.png';
import LogoTitle from '../Resources/img/LogoTitle.png';
import AuthService from '../AuthService';
import Cookies from 'universal-cookie';
import decode from 'jwt-decode';

const styles = {
  logo:{
    'background-repeat' : "no-repeat",
    position : "absolute",
    left : "36px",
    top : "16px",
    width : "130px",
    height : "75px"
  },
  LogoTitle:{
    'background-repeat' : "no-repeat",
    position : "absolute",
    left : "170px",
    top : "20px",
    width : "150px",
    height : "75px"

  },
  loginButton: {
    'font-size': "18px",
    background : "#E3027E",
    background : "rgba(227, 2, 126, 1)",
    position : "absolute",
    left : "94%",
    top : "27px",
    width : "75px",
    height : "47px",
    'border-radius' : "9px",
    '-moz-border-radius' : "9px",
    '-webkit-border-radius' : "9px",
    'border-color' : "white",
    padding: "9px",

  },
    loggedButton: {
    'font-size': "18px",
    background : "#E3027E",
    background : "rgba(227, 2, 126, 1)",
    position : "absolute",
    right : "2%",
    top : "31px",
    padding: "9px",
    'min-width': "60px",
    height : "47px",
    'border-radius' : "9px",
    '-moz-border-radius' : "9px",
    '-webkit-border-radius' : "9px",
        'border-color' : "white"

  },
};

export default class TopBar extends PureComponent {
  constructor(){
    super()
    this.state = {
      cookies : new Cookies()
    }
    this.state.cookies = new Cookies();
  }

  loggedIn() {
      //const cookies = new Cookies();
      // Checks if there is a saved token and it's still valid
      const token = this.state.cookies.get('token') // Getting token from cookie
     // const user = this.state.cookies.get('user').username   

      if(!token && !this.isTokenExpired(token)){
          return(
            <Button variant="secondary" href="/Login" style={styles.loginButton}>Login</Button>);
      } 
      else {        
        return(
        <Button variant="secondary" href="/Logout" style={styles.loggedButton}>Logout</Button>);
      }
  }

  isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
            return true;
        }
        else
            return false;
    }
    catch (err) {
        return false;
    }
    }


  render() {
    return (
      <div>
        <img src={Logo} style={styles.logo}/>
        <img src={LogoTitle} style={styles.LogoTitle}/>
        {this.loggedIn()}
      </div>
    );
  }
}