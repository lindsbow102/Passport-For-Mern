import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>I am the Home Component</h1>
        <a href="/signup">First time users sign up here</a>
        <br></br>
        <a href="/login">Returning users, please log in</a>
      </div>
    );
  }
}
