import React, {useState} from "react";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";


import React, {Component} from "react";
import "./App.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Restaurant from "./Restaurant";




function Home(){
    
const [restaurants, setRestaurants] = useState([]);
const [name, setName] = useState("");

    const getRestaurantsByName = () => {
        fetch('http://localhost:6060/restaurant', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

             body: JSON.stringify(name)

        })
        .then(result => result.json())
        .then(data => {
            setRestaurants(data)
        })
    }

    const handleChange = e =>{
        setName(e.target.value)
    }

    const handleSubmit = () => {
        {restaurants.map( restaurant => <Restaurant name = {restaurant.name} description = {restaurant.description}/> )} 

    }

    return (
        <div>
        <h1 style={{color: "white"}}>Home</h1>
        <img src="/images/Cognixia.png"/>
             <nav style={{paddingBottom: "100px"}}>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/login" >Log In</NavLink>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px" }} exact to="/signup" activeClassName="active">Sign Up</NavLink>
            </nav>
        <form onSubmit={this.handleSubmit}> 
            <label>
                <input margin="50px" size="30" type="text" name="name" placeholder="Search for a restaurant..." value = {this.state.name} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Go" />
        </form>
            <Footer class="footer"/>
        </div>
    ); 
}

export default Home;
