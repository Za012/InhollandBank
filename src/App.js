
import React from 'react';
import Login from './Login';
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
import AccountsSearch from './AccountsSearch'

function App(){
  return(
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Employee/Search" component={Search}/>
          <Route path="/Employee/AccountsSearch" component={AccountsSearch}/>
          <Route path="/Employee/RegisterUser"component={RegisterUser}/>
          <Route path="/Employee/CreateAccount"component={CreateAccount}/>
          <Route path="/Customer/Statistics" component={CustomerStatistics}/>
          <Route path="/Customer/Overview" component={AccountOverview}/>
          <Route path="/Customer/CreateTransaction" component={CreateTransaction}/>
          <Route path="/Customer/TransactionsOverview" component={TransactionsOverview}/>
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