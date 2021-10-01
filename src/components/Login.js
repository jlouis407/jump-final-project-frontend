import React, {Component} from "react";
import "./App.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            firstName: '',
            email: '',
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.state;
        console.log(user);

        axios.post(`http://localhost:8080/authenticate`, user)
            .then(res => {
                console.log(res);
                // storing jwt in localstorage 
                localStorage.setItem('jwt',res.data.token);
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
        return (
            <div>
                <h1 style={{color: "white"}}>LOGIN</h1>
                <img src="/images/Cognixia.png"/>

                <form onSubmit={this.handleSubmit}>
                    {/* <label for="email"></label> */}
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required></input><br/>
                    {/* <label for="password"></label> */}
                    <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}required></input><br/><br/>
                    <input type="submit" value="Submit" /* onClick={handleSubmit} */ />
                </form>
            {/* <div style={{paddingTop: "50px"}}>
                <NavLink  style={{ paddingTop: "100px", fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/" >Home</NavLink>
            </div> */}
            </div>
        );
    };
}

export default LoginForm;
