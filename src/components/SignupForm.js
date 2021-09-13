import React, { Component } from 'react';
import "./App.css";
import {NavLink, useHistory} from "react-router-dom";
import axios from 'axios';


class SignupForm extends Component {
        state = {
            id: "",
            firstName: "",
            email: "",
            username: "",
            password: ""
        };

    onFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        });
    };

    onUsernameChange = e => {
        this.setState({
            username: e.target.value
        });
    };

    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: this.state.id,
            firstName: this.state.firstName,
            email: this.state.firstName,
            username: this.state.username,
            password: this.password
        }

        axios
            .post("https://localhost:8080/register", data)
            .then(res => console.log(res))
            .catch(res => console.log(res))
    };

    render(){
        console.log(this.state);
        return (
            <div>
                <h1 style={{color: "white"}}>SIGNUP</h1>
                <img src="/images/Cognixia.png"/>
    
                <form onSubmit={this.handleSubmit}>
                    <input type="firstName" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.onFirstNameChange} required></input><br/>
                    <input type="username" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.onUsernameChange} ></input><br/>
                    <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange}></input><br/><br/>
                    <input type="submit" value="Submit" onClick={()=> {history.push("/success")}} />
                </form>
            <div style={{paddingTop: "50px"}}>
                <NavLink  style={{ paddingTop: "100px", fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/" >Home</NavLink>
            </div>
            </div>
        )

    }
}

export default SignupForm;


/* import React from "react";
import "./App.css";
import {NavLink} from "react-router-dom";





 fetch('http://localhost:8080/register', {
    method: 'POST',
    body: JSON.stringify({
        firstName: '',
        email: '',
        username: '',
        password: ''
    })
}).then(res => {
    return res.json()
}) 
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

function Signup(){

    return (
        <div>
            <h1 style={{color: "white"}}>SIGNUP</h1>
            <img src="/images/Cognixia.png"/>

            <form>
                <input type="firstName" id="firstName" name="firstName" placeholder="First Name" ></input><br/>
                <input type="username" id="username" name="username" placeholder="Username" ></input><br/>
                <input type="password" id="password" name="password" placeholder="Password"></input><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        <div style={{paddingTop: "50px"}}>
            <NavLink  style={{ paddingTop: "100px", fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/" >Home</NavLink>
        </div>
        </div>
    )
    }


export default Signup;
*/