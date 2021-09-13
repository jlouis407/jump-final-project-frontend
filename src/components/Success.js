import React from "react";
import {Redirect} from "react-router-dom";

function Success({authorized}){
    if(!authorized){
        return <Redirect to="/login"/>
    }

}

export default Success;