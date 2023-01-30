import React, { Component } from "react";
import Tasks from "./Tasks.js"
import Websites from "./Websites.js"
import Quote from "./Quote.js"
import Quotes from "./Quotes.js"


class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log("main " + this.props.tasks)
    }

    setnav(nav) {
        this.props.nav = nav;
    }
    addTask(e) {
        e.preventDefault();
        alert("add popup")
    }

    render() {
        if (this.props.nav == 0) {
            return (
                <div className="main">
                    <h1>Titled Mango Site</h1>
                    <div className="mainTable">
                        <Tasks
                            maxTasks={3}
                            tasks={this.props.tasks}
                            size={"tasksSmall"}
                        />
                        <Websites />
                        <Quote />
                        <Quotes />
                    </div>
                </div>
            );
        } else if (this.props.nav == 1) {
            return (
                <div className="main">
                    <h1>Tasks</h1>
                    <button className="addTask" onClick={this.addTask} >Add task</button>

                    <Tasks
                        maxTasks={0}
                        tasks={this.props.tasks}
                        size={"tasksLarge"}
                    />
                </div>
            );

        } else if (this.props.nav == 3) {
            return (
                <div className="main">
                    <h1>Quotes</h1>
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                    <Quotes />
                </div>
            );

        }
    };
}

export default Main;