import React, { Component } from "react";
import ReactDOM from 'react-dom';
import delet from './/img/delet.jpg'






class Task extends React.Component {
    constructor(props) {
        super(props);
        this.currentDate = Date().getDate
        // if(props.deadline == )
    }

    state = {
        check : this.props.status,
        class : "task"
    }

    updateCheck(value){
        var checkbox = document.getElementById("checkbox");
        value = true;

    }

    delete(e) {
        e.preventDefault();
        alert("delete popup")
    }

    edit(e) {
        e.preventDefault();
        alert("edit popup")
    }


    render() {
        return (
            <div className={this.state.class}>
                <p>Task: {this.props.name}</p>
                Category: {this.props.category}<br/>
                Deadline: {this.props.deadline}<br/>
                Completed: <input id="checkbox" type="checkbox" defaultChecked={this.state.check} onInput={this.updateCheck(this.value)}></input>
                <button onClick={this.delete} className="deleteButton">delete</button>
                <button onClick={this.edit} className="editButton">edit</button>
            </div>
        );
    };
}

export default Task;