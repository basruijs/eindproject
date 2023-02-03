import React, { Component } from "react";
import ReactDOM from 'react-dom';
import delet from './/img/delet.jpg'
import Popup from 'reactjs-popup';






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
                <Popup
                            trigger={<button onClick={this.delete} className="deleteButton">delete</button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="popup">
                                    <div className="content">
                                        <form>
                                            Are you sure you want to delete the task "{this.props.name}"
                                        </form>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="cancelButton"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            no!!!
                                        </button>
                                        <button
                                            className="acceptButton"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            Yes
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <Popup
                            trigger={<button onClick={this.edit} className="editButton">edit</button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="popup">
                                    <div className="content">
                                        <form>
                                            <label for="name">Name:</label>
                                            <input placeholder="Name..." type="text" id="name" name="name"></input><br />
                                            <label for="category">Category:</label>
                                            <input placeholder="Category..." type="text" id="category" name="category"></input><br />
                                            <label for="deadline">Deadline:</label>
                                            <input type="date" id="deadline" name="deadline"></input><br />
                                        </form>
                                    </div>
                                    <div className="actions">
                                        <button
                                            className="cancelButton"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            cancel
                                        </button>
                                        <button
                                            className="acceptButton"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            Accept
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>

                
            </div>
        );
    };
}

export default Task;