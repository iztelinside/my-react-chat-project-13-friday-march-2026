import React from "react";
import "./main.css";

function Main(props){
    return(
        <div className={"main"}><h2>{props.title}</h2></div>
    )
};
export default Main;