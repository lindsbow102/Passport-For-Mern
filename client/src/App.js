import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}
