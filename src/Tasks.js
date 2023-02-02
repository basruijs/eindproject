import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Task from "./Task.js";

class Tasks extends React.Component{
    constructor(props) {
        super(props);
        if(props.maxTasks == 0){
            this.arrayMaxLength = this.props.tasks.length;
        } else {
            this.arrayMaxLength = props.maxTasks
        }

        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        tasksArrayLong : this.props.tasks,
        tasksArray : this.props.tasks,
        value: '',
        filteredArray : []
    }

    componentDidMount(){
        var completedCount = 0;
        for (let index = 0; index < this.state.tasksArray.length; index++) {
            const element = this.state.tasksArray[index];
            if(element.status){
                completedCount = completedCount + 1;
            }
        }
        var tempTasks = this.state.tasksArray.sort((p1, p2) => (p1.deadline > p2.deadline) ? 1 : (p1.deadline < p2.deadline) ? -1 : 0);
        this.setState({
            totalTasks: tempTasks.length,
            completedCount: completedCount,
            tasksArrayLong : tempTasks,
            tasksArray: tempTasks.slice(0, this.arrayMaxLength),
        })
        this.setState({filteredArray: this.state.tasksArrayLong.slice(0, this.arrayMaxLength)});


    }

    handleChange(event) {
        this.setState({value: event.target.value});
        var value = document.getElementById("filter").value
        var completed = document.getElementById("completed").checked
        var incompleted = document.getElementById("incompleted").checked
            var tempArray = [];
            for (let index = 0; index < this.state.tasksArrayLong.length; index++) {
                const element = this.state.tasksArrayLong[index];
                if((element.category==value || value=='' || value==undefined) &&
                ((element.status && completed) || (!element.status && incompleted))
                ){
                    console.log(element.status)
                    tempArray.push(element)
                }
            }
            this.setState({filteredArray: tempArray})
        // }
        this.setState({})


    }
    

    render(){
        if(this.state.tasksArray.length > 1){
        if(this.props.maxTasks == 0){
            return (
            <div className={this.props.size}>
                Tasks completed: {this.state.completedCount}/{this.state.totalTasks}
                <form>
                Show completed:<input defaultChecked type="checkbox" id="completed" name="completed" onChange={this.handleChange}/>
                Show incompleted:<input defaultChecked type="checkbox" id="incompleted" name="incompleted" onChange={this.handleChange}/>
                Filter: <input placeholder="Category..." type="text" id="filter" name="filter" onChange={this.handleChange}></input>
                </form>
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