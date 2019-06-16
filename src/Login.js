import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (event) {
    this.setState( {[event.target.name]: event.target.value} )
  }

  handleClick (e) {
    e.preventDefault();
    console.log('Success!')
    this.username = this.state.username;
    this.password = this.state.password;

    axios.post('https://localhost:8443/Login?username='+this.username+'&'+'password='+this.password,
    {
      headers: { 
       "Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Methods": "DELETE, POST, GET",
       "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
     }
   })
    .then(function(response){
      console.log(response);
      const cookies = new Cookies(); 
      var data = response.data;
      data.token = "Bearer "+data.token;
      cookies.set('token', data, { path: '/' });
      console.log(data); 
      axios.get('https://localhost:8443/me',
      {
        headers:{
         "Authorization": cookies.get('token').token,
         'Accept' : 'application/json',
         'Content-Type': 'application/json'
       }
     });

    })
    .catch(err => {
        console.log(err);
        return err;
      });
  }

  retrieveRoles(cookies){

  }

  render () {
    return (
      <div className='login_container'>
        <h2>Login to your account</h2>
        <form id="login_window" className="login_form" name="login" onSubmit={this.handleClick}>
          <input type="text" id="username" title="username"  name="username" 
          onChange={event => this.handleChange(event)} placeholder="username" />
          <input type="password" id="password" title="username" name="password" 
          onChange={event => this.handleChange(event)}  placeholder="password" />
          <button type="submit" className="login" name="login">Login</button>
        </form>
      </div>
      /*<div className='button__container'>
      <button className='button' onClick={this.handleClick}>
      Click Me
      </button>
      </div>*/
      )
  }
}
export default Login