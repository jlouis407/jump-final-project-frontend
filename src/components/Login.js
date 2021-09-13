import React from "react";
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
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        <div style={{paddingTop: "50px"}}>
            <NavLink  style={{ paddingTop: "100px", fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/" >Home</NavLink>
        </div>
        </div>
    )
    }


export default Login;

