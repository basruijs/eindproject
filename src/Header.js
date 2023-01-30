import React, { Component, useState, useEffect }  from "react";
import ReactDOM from 'react-dom';
import logo from "./img/Mangomango.png";

function Header() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());

        }, 1000);

        return () => clearInterval(interval);
      }, []);

    
    // render(){

        return (
            <div className="header">
                <img className="logo" src={logo} height="40px"></img>
                {/* {time.toLocaleDateString()}<br></br> */}
                {time.getFullYear()}/{time.getMonth()+1}/{time.getDate()}<br></br> 
                {time.toLocaleTimeString()}
                </div>
        );
    // };



}

export default Header;
    