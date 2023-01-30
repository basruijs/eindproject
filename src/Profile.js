import React, { Component } from "react";
import ReactDOM from 'react-dom';
import users from "./data/users.json"
import avatar from "./img/mango.png";
import Header from './Header.js';
import Main from './Main.js';

import tasks from './data/tasks.json';


class Profile extends React.Component{
    constructor(props) {
        
        super(props);
        this.nav = 0;
    }


    changeNav(nav, e){
        e.preventDefault();
        this.nav = nav
        this.forceUpdate()
    }

    render(){
        return (
            <div>
            <Header/>

            <div className="profile">
                <img src={users.users[0].avatar} alt="user avatar" height="100px" width="100px" className="avatar"></img><br/><br/>
                Name: {users.users[0].name}<br/><br/>
                E-Mail: {users.users[0].email}<br/>
                <h4>navigation</h4>
                <button className="navButton" onClick={(e) => this.changeNav(0, e)}>Home!</button>
                <button className="navButton" onClick={(e) => this.changeNav(1, e)}>Tasks!</button>
                <button className="navButton">Sites!</button>
                <button className="navButton" onClick={(e) => this.changeNav(3, e)}>Quotes!</button>
            </div>
            <Main
                nav = {this.nav}
                tasks = {tasks.tasks}
            />
            </div>
        );
    };
}

export default Profile;
