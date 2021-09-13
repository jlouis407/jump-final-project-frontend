import React, { Component } from 'react';
import "./App.css";
import {NavLink} from "react-router-dom";

class SignupForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.user.id,
            firstName: props.user.firstName,
            email: props.user.email,
            username: props.user.username,
            password: props.user.password
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    handleSubmit = (event) => {
        console.log('submit');
        this.props.handleCrud(this.state);
    }

    render(){
        console.log(this.state);
        return (
            <div>
                <h1 style={{color: "white"}}>SIGNUP</h1>
                <img src="/images/Cognixia.png"/>
    
                <form onSubmit={this.handleSubmit}>
                    <input type="firstName" id="firstName" name="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} required></input><br/>
                    <input type="username" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} ></input><br/>
                    <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input><br/><br/>
                    <input type="submit" value="Submit" />
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