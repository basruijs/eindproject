import React, { Component } from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import Main from "./Main";
import Profile from "./Profile";

class Website extends React.Component {
    constructor(props) {
        

        super(props);

    }

    state = {
        check : this.props.status,
        url : this.props.url
    }

    delete(e) {
        e.preventDefault();
        alert("delete popup")
    }

    edit(e) {
        e.preventDefault();
        Main.nav=0;
        alert("edit popup")
    }
    
    componentDidMount(){
        console.log(this.props.url)
        this.setState({
            url : this.props.url
        })
    }

    openSite(url, e) {
        console.log(url + " clicked")
        window.open(url)
    }


    render() {
        return (
            <div className="website" >
                <div onClick={e=> { e.preventDefault(); this.openSite(this.props.url)} }>
                <p>Name: {this.props.name}</p>
                <img src={this.props.img}></img>
                URL: <span id="url">{this.props.url}</span><br/>
                </div>
                Clicks: {this.props.clicks}
                <button onClick={this.delete} className="deleteButton">delete</button>
                <button onClick={this.edit} className="editButton">edit</button>
            </div>
        );
    };
}

export default Website;