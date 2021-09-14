import React, {Component} from "react";
import "./App.css";
import {NavLink} from "react-router-dom";
import axios from "axios";
import StarRatings from './react-star-ratings';




class ReviewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            body: '',
            time: '',
            date: '',
            restaurantId: '',
            userId: '',
            rating: ''
        };

        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     changeRating(newRating, name){
         this.setState({
             rating: newRating
         })
     }

    handleSubmit = (event) => {
        event.preventDefault();
        const review = this.state;
        console.log(review);
        this.setState({
            'time': new Date().getTime(),
            'date': new Date().getDate()
        })

        axios.post(`http://localhost:7775/user-service/user/update`, review,
        {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('jwt')}` 
            }
        })
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
            [event.target.name]: event.target.value,

        })

    }

    

    
    render(){
        return (
            <div>
                <h1 style={{color: "white"}}>LOGIN</h1>
                <img src="/images/Cognixia.png"/>

                <StarRatings
                    rating = {this.state.rating}
                    starRatedColor= "yellow" changeRating={this.changeRating}
                    numberOfStars = {5} name = 'rating'/>

                <form onSubmit={this.handleSubmit}>
                    {/* <label for="email"></label> */}
                    <input type="textarea" id="body" name="body" placeholder="Say something nice... or not?" value={this.state.body} onChange={this.handleChange} required></input><br/>

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