import React from 'react';

const Restaurant = props => {
    return (
        <div>
            <ul>
                <li>Name: {props.name}</li>
                <li>Color: {props.description}</li>
            </ul>
        </div>
    );
};

export default Restaurant;