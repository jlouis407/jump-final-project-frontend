import React, {useState, Component} from "react";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";

import "./App.css";
import Restaurant from "./Restaurant";
import { render } from "@testing-library/react";


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
        e.preventDefault();
        let searchedWord = e.target.value;
        let searchedWordLength = searchedWord.length;
        restaurants.map((restaurant) => {
            let restaurantName = restaurant.name;
            let restaurantNameSubString = restaurantName.substring(0,searchedWordLength);


            console.log("Restaurant Name substring" + restaurantNameSubString);
            console.log("Searched word " + searchedWord);

            if(restaurantNameSubString === searchedWord){
                console.log(restaurant.name + " has been returned!");
                //This is what I would like to do.....
                //    <Restaurant name = {restaurant.name} description = {restaurant.description}/>
                
            }
            (restaurantNameSubString === searchedWord) && (
                console.log(restaurant.name + " has been returned!"));
        })
        setName(e.target.value) 
    }

    return (
        <div>
        <h1 style={{color: "white"}}>Home</h1>
        {getRestaurants}
        <img src="/images/Cognixia.png"/>
             <nav style={{paddingBottom: "100px"}}>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/login" >Log In</NavLink>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px" }} exact to="/signup" activeClassName="active">Sign Up</NavLink>
            </nav>
         <form> 
            <label>
                <input margin="50px" size="30" type="text" name="name" placeholder="Search for a restaurant..." onChange={handleChange}/>
            </label>
        </form> 
            <Footer class="footer"/>
        </div>
    ); 
}

export default Home;
