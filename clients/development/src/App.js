import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import stranits
import RegistrationPage from "./wiews/common/register";
import Login from "./wiews/common/login";
import Admin from "./wiews/admin";
import UsersPage from "./wiews/buyer"
class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
  					<Switch>
  						<Route path="/register" component= {RegistrationPage}/>
              <Route path="/login" component= {Login}/>
              <Route path="/admin" component= {Admin}/>
              <Route path="/buyer" component= {UsersPage}/>
  					</Switch>
  				</Router>
      </div>
    );
  }
}

export default App;
