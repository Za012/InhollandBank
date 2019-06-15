import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Cookies from 'universal-cookie';

class App extends Component {
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
      var token = response.data;
      cookies.set('token', token, { path: '/' });
      console.log(cookies.get('token')); 
    })
    .catch(err => {
        // If there was a problem, we want to
        console.log(err);
        return err;
      });
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
export default App