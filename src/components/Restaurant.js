import React from 'react';

const Restaurant = props => {
    
console.log(props.name + "is the Restaurant Name!");
    return (
       
        <div>
            <h1> DID YOU FIND IT </h1>
            <ul>
                <li>Name: {props.name}</li>
                <li>Description: {props.description}</li>
            </ul>
        </div>
    );
};

export default Restaurant;