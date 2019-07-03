import React from 'react'
import AuthService from './AuthService'
import { Redirect, Route } from 'react-router-dom'

const Logout = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const auth = new AuthService();
  const isLoggedIn = auth.loggedIn();
  auth.logout();

  return (
    <Route
      {...rest}
      render={props =>
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      }
    />
  )
}

export default Logout