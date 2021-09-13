import "./App.css";
import {NavLink} from "react-router-dom";
import React, {Component} from 'react';
import axios from "axios";



class Login extends Component {
    state = {
      username: "",
      password: ""
    };

    onUsernameChange = e => {
      this.setState({
        title: e.target.value
      });
    };

    onPasswordChange = e => {
      this.setState({
        body: e.target.value
      });
    };
    handleSubmit = e => {
      e.preventDefault();
      const data = {
        title: this.state.username,
        body: this.state.password
      };
      axios
        .post("https://localhost:8080/authenticate", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };

    render() {
      return (
        <div className="post">
          <form className="post" onSubmit={this.handleSubmit}>
            <input
              placeholder="Username" value={this.state.username}
              onChange={this.onUsernameChange} required
            />
            <textarea
              placeholder="Password" value={this.state.password}
              onChange={this.onPasswordChange} required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }
/* import React from "react";
import "./App.css";
import {NavLink} from "react-router-dom";


fetch('http://localhost:8080/authenticate', {
    method: 'POST',
    body: JSON.stringify({
        username: '',
        password: ''
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }

}).then(res => {
    return res.json()
}) 
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

function Login(){

    

    return (
        <div>
            <h1 style={{color: "white"}}>LOGIN</h1>
            <img src="/images/Cognixia.png"/>

            <form>
                <label for="email"></label>
                <input type="username" id="username" name="username" placeholder="Username"></input><br/>
                <label for="password"></label>
                <input type="password" id="password" name="password" placeholder="Password"></input><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        <div style={{paddingTop: "50px"}}>
            <NavLink  style={{ paddingTop: "100px", fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/" >Home</NavLink>
        </div>
        </div>
    )
    }
    */


export default Login;

