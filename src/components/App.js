import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./SignupForm";
import Reviews from "./Reviews";
import Footer from "./Footer";
import "./App.css";
import {Route} from "react-router-dom";
import axios from "axios";
import Success from "./Success";

function App(){
    return (
    <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/success" component={Success}/>
    </div>
    )
}

export default App;