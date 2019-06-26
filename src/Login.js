import React, { Component } from 'react'
import './Login.css'
import axios from 'axios'
import Cookies from 'universal-cookie';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import Tulip from './Resources/img/tulip.jpg';
import TopBar from "./HomeComponents/TopBar";


class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount(){
    if(this.Auth.loggedIn()){
        if(this.Auth.state.cookies.get('user').roles.indexOf("ROLE_EMPLOYEE") > -1){
          this.props.history.replace('/Employee/Search');
        }
        else{
          this.props.history.replace('/Customer');
        }
    }
}


    render() {
        return (
            <div className="center">
              <TopBar/>
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            className="form-item"
                            placeholder="Username"
                            name="username"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password"
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
            .then(res =>{
              this.props.history.replace('/Employee/Search');
            })
            .catch(err =>{
                alert(err);
            })
    }
}

export default Login;