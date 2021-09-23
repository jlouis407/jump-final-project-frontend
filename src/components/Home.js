import React, {useState, Component} from "react";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";

import "./App.css";
import Restaurant from "./Restaurant";


const Home = () => {

    
    
const [restaurants, setRestaurants] = useState([]);
const [name, setName] = useState("");
const [searchedRestaurants, setSearchedRestaurants] = useState([]);

    const getRestaurants = () => {

        fetch('http://localhost:6060/restaurant', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            setRestaurants(data)
        })

    }

    const handleChange = (e) =>{
        let searchedWord = e.target.value;
        let searchedWordLength = searchedWord.length;
        console.log(searchedWord.length)
        restaurants.map((restaurant) => {
            let restaurantName = restaurant.name;
            let restaurantNameSubString = restaurantName.substring(0,searchedWordLength);

            (restaurantNameSubString === searchedWord) && (setSearchedRestaurants
                (searchedRestaurants.concat(restaurant)));
            
        })
        searchedRestaurants.map((restaurant) => {
            <Restaurant name = {restaurant.name} description = {restaurant.description}/>
        })
        setName(e.target.value) 
    }

    return (
        <div>
        <h1 style={{color: "white"}}>Home</h1>
        <button onClick={getRestaurants}>Show Restaurants</button>
        <img src="/images/Cognixia.png"/>
             <nav style={{paddingBottom: "100px"}}>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/login" >Log In</NavLink>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px" }} exact to="/signup" activeClassName="active">Sign Up</NavLink>
            </nav>
         <form onSubmit={getRestaurants}> 
            <label>
                <input margin="50px" size="30" type="text" name="name" placeholder="Search for a restaurant..." onChange={handleChange}/>
            </label>
            <input type="submit" value="Go" />
        </form> 
            <Footer class="footer"/>
        </div>
    ); 
}

export default Home;
