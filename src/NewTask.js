import React, { Component } from "react";
import ReactDOM from 'react-dom';
import App from "./App";

class NewTask extends React.Component{
    constructor(props) {
        super(props);

    }
    

    render(){
        return (
            <div className="newTask">
        <div class="popup" id="popup">
        <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"></input><br/>
        <label for="category">Category:</label>
        <input type="text" id="category" name="category"></input><br/>
        <label for="deadline">Deadline:</label>
        <input type="date" id="deadline" name="deadline"></input><br/>                   
        </form>
        <button onclick={this.cancelAddTask()}>Cancel</button>
        </div>
            </div>
        );
    };
}

export default NewTask;