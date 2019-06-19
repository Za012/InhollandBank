
import React from 'react';
import Login from './Login';
import Search from './Search';
import RegisterUser from './RegisterUser';
import CustomerStatistics from './CustomerStatistics';
import Home from './Home';
import Profile from './components/Profile';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Employee/Search" component={Search}/>
          <Route path="/Employee/RegisterUser"component={RegisterUser}/>
          <Route path="/Customer/Statistics" component={CustomerStatistics}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/Home" component={Home}/>
        </Switch>
      </div>
      </Router>
    )
}
  const yay = () => (
    <div>
      <h1>Home Page</h1>
    </div>
  );

export default App;