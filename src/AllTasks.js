import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Task from "./Task.js";
import tasks from './data/tasks.json';


class Tasks extends React.Component{
    constructor(props) {
        super(props);
        this.arrayMaxLength = 3;

    }
    componentDidMount(){
        var tempTasks = this.state.tasksArray.sort((p1, p2) => (p1.deadline > p2.deadline) ? 1 : (p1.deadline < p2.deadline) ? -1 : 0);
        this.setState({
            tasksArray: tempTasks
        })
    }
    state = {
        tasksArray : tasks.tasks
    }

    render(){
        return (
            <div className="tasks">

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
    };
}

export default Tasks;