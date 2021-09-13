import React from "react";
import "./App.css";
import {NavLink} from "react-router-dom";


fetch('http://localhost:8080/admin/update', {
    method: 'PUT',
    body: JSON.stringify({
        restaurantId: '',
        name: '',
        address: '334 Street',
        cuisine: "Pizza",
        description: 'Serves pizza',
        reviews:[]
    })
}).then(res => {
    return res.json()
}) 
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))