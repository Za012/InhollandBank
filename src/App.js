
import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Search from './Search';
import RegisterUser from './RegisterUser';
import CustomerStatistics from './CustomerStatistics';
import Home from './Home';
import Profile from './components/Profile';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import AccountOverview from './AccountOverview';
import CreateTransaction from './CreateTransaction';
import TransactionsOverview from './TransactionsOverview';
import AccountsSearch from './AccountsSearch';
import PrivateRoute from './components/PrivateRoute';

function App(){
  return(
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/Login" component={Login} />
          <PrivateRoute path="/Employee/Search" component={Search}/>
          <PrivateRoute path="/Employee/AccountsSearch" component={AccountsSearch}/>
          <PrivateRoute path="/Employee/RegisterUser"component={RegisterUser}/>
          <PrivateRoute path="/Employee/CreateAccount"component={CreateAccount}/>
          <PrivateRoute path="/Customer/Statistics" component={CustomerStatistics}/>
          <PrivateRoute path="/Customer/Overview" component={AccountOverview}/>
          <PrivateRoute path="/Customer/CreateTransaction" component={CreateTransaction}/>
          <PrivateRoute path="/Customer/TransactionsOverview" component={TransactionsOverview}/>
          <PrivateRoute path="/Logout" component={Logout} />
          <Route path="/" component={Home}/>
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