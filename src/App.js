
import React from 'react';
import Login from './Login';
import Search from './Search';
import CustomerStatistics from './CustomerStatistics';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className="Login">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Employee/Search" component={Search}/>
          <Route path="/Customer/Statistics" component={CustomerStatistics}/>
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