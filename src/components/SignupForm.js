import React, { Component } from 'react';
import "./App.css";
import {NavLink} from "react-router-dom";
import axios from "axios";



class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            firstName: '',
            email: '',
            username: '',
            password: ''
        };

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = this.state;
        console.log(newUser);

        axios.post(`http://localhost:8080/register`, newUser)
            .then(res => {
                console.log(res);
            })

    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        const {firstName,email, username, password} = this.state;
        return (
            <div>
                <h1 style={{color: "white"}}>SIGNUP</h1>
                <img src="/images/Cognixia.png"/>
                <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/login" >Log In</NavLink>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}  required></input><br/>
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required></input><br/>
                    <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}required></input><br/><br/>
                    <input type="email" id="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}required></input><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            {/* <div style={{paddingTop: "50px"}}>
                <NavLink  style={{ paddingTop: "100px", fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/" >Home</NavLink>
            </div> */}
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