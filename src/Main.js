import React, { Component } from "react";
import Tasks from "./Tasks.js"
import Websites from "./Websites.js"
import Quote from "./Quote.js"
import Quotes from "./Quotes.js"


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.nav = this.props.nav;
    }

    setnav(nav) {
        this.props.nav = nav;
    }

    addSite(e) {
        e.preventDefault();
        alert("add site popup")
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
                        <Websites 
                            maxSites={2}
                        />
                        <Quote />
                        <Quotes />
                    </div>
                </div>
            );
        } else if (this.props.nav == 1) {
            return (
                <div className="main">
                    <h1>Tasks</h1>

                    <Tasks
                        maxTasks={0}
                        tasks={this.props.tasks}
                        size={"tasksLarge"}
                    />
                </div>
            );
        } else if (this.props.nav == 2) {
            return (
        <div className="main">
            <h1>Websites</h1>
            <button className="addTask" onClick={this.addSite} >Add site</button>
            <Websites
                maxSites={0}
            />
        </div>
            )
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

        } else {
            <div>oops</div>
        }
    };
}

export default Main;