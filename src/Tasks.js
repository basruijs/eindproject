import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Task from "./Task.js";
import Popup from 'reactjs-popup';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        if (!props.maxTasks) {
            this.arrayMaxLength = this.props.tasks.length;
        } else {
            this.arrayMaxLength = props.maxTasks
        }
        this.cancelAddTask = this.cancelAddTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        tasksArrayLong: this.props.tasks,
        tasksArray: this.props.tasks,
        value: '',
        filteredArray: []
    }

    componentDidMount() {
        const completedCount = this.state.tasksArray.filter(t => t.status).length
        var tempTasks = this.state.tasksArray.sort((p1, p2) => (p1.deadline > p2.deadline) ? 1 : (p1.deadline < p2.deadline) ? -1 : 0);
        this.setState({
            totalTasks: tempTasks.length,
            completedCount: completedCount,
            tasksArrayLong: tempTasks,
            tasksArray: tempTasks.slice(0, this.arrayMaxLength)
        })
        this.setState({ filteredArray: this.state.tasksArrayLong.slice(0, this.arrayMaxLength) });


    }

    handleChange(event) {
        var value = document.getElementById("filter").value
        var completed = document.getElementById("completed").checked
        var incompleted = document.getElementById("incompleted").checked
        var tempArray = [];
        for (let index = 0; index < this.state.tasksArrayLong.length; index++) {
            const element = this.state.tasksArrayLong[index];
            if ((element.category == value || value == '' || value == undefined) &&
                ((element.status && completed) || (!element.status && incompleted))
            ) {
                console.log(element.status)
                tempArray.push(element)
            }
        }
        this.setState({ filteredArray: tempArray })
        this.setState({})


    }
    addTask(e) {
        e.preventDefault();
        const page = document.getElementById("tasks");


    }

    cancelAddTask(e) {
        e.preventDefault();
        console.log("owo")
        const popup = document.getElementById("popup");
        popup.remove();
    }


    render() {
        if (this.state.tasksArray.length > 1) {
            if (this.props.maxTasks == 0) {
                return (
                    <div id="tasks">
                        <Popup
                            trigger={<button className="addTask">Add task</button>}
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
                        <div className="optionBar">

                            Tasks completed: {this.state.completedCount}/{this.state.totalTasks}
                            <form>
                                Show completed:<input defaultChecked type="checkbox" id="completed" name="completed" onChange={this.handleChange} />
                                Show incompleted:<input defaultChecked type="checkbox" id="incompleted" name="incompleted" onChange={this.handleChange} />
                                Filter: <input placeholder="Category..." type="text" id="filter" name="filter" onChange={this.handleChange}></input>
                            </form>
                        </div>
                        <div className={this.props.size}>
                            {
                                this.state.filteredArray.map((task, index) =>
                                    <Task
                                        name={task.name}
                                        category={task.category}
                                        deadline={task.deadline}
                                        status={task.status}
                                        key={index.toString()}
                                    />
                                )
                            }
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className={this.props.size}>
                        {
                            this.state.tasksArray.map((task, index) =>
                                <Task
                                    name={task.name}
                                    category={task.category}
                                    deadline={task.deadline}
                                    status={task.status}
                                    key={index.toString()}
                                />


                            )
                        }
                    </div>
                );
            }
        }
    };
}

export default Tasks;