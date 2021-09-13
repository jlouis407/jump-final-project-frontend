import React from "react";
import Footer from "./Footer";
import {NavLink} from "react-router-dom";


function Home(){
    return (
        <div>
        <h1 style={{color: "white"}}>Home</h1>
        <img src="/images/Cognixia.png"/>
             <nav style={{paddingBottom: "100px"}}>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px"}} exact to="/login" >Log In</NavLink>
               <NavLink style={{fontSize: "2.5em", color: "white", textDecoration: "underline", margin: "50px" }} exact to="/signup" activeClassName="active">Sign Up</NavLink>
            </nav>
        <form> 
            <label>
                <input margin="50px" size="30" type="text" name="name" placeholder="Search for a restaurant..." />
            </label>
            <input type="submit" value="Go" />
        </form>
            <Footer class="footer"/>
        </div>
    ); 
}

export default Home;
