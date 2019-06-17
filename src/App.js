
import React from 'react';
import Login from './Login';
import Search from './Search';
import RegisterUser from './RegisterUser';
import Profile from './components/Profile';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Employee/Search" component={Search}/>
          <Route path="/Employee/RegisterUser"component={RegisterUser}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
      </Router>
    )
}
  const Home = () => (
    <div>
      <h1>Home Page</h1>
    </div>
  );

export default App;