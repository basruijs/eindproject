import React, { Component } from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import Main from "./Main";
import Profile from "./Profile";
import Popup from 'reactjs-popup';


class Website extends React.Component {
    constructor(props) {


        super(props);

    }

    state = {
        check: this.props.status,
        url: this.props.url
    }

    delete(e) {
        e.preventDefault();
        alert("delete popup")
    }

    edit(e) {
        e.preventDefault();
        Main.nav = 0;
        alert("edit popup")
    }

    componentDidMount() {
        console.log(this.props.url)
        this.setState({
            url: this.props.url
        })
    }

    openSite(url, e) {
        console.log(url + " clicked")
        window.open(url)
    }


    render() {
        return (
            <div className="website" >
                <div onClick={e => { e.preventDefault(); this.openSite(this.props.url) }}>
                    <p>Name: {this.props.name}</p>
                    <img src={this.props.img}></img>
                    URL: <span id="url">{this.props.url}</span><br />
                </div>
                Clicks: {this.props.clicks}
                <Popup
                    trigger={<button className="deleteButton">delete</button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="popup">
                            <div className="content">
                                <form>
                                    Are you sure you want to delete the site "{this.props.name}"
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
                                    <label for="url">URL:</label>
                                    <input placeholder="url..." type="text" id="url" name="url"></input><br />
                                    <label for="image">Image:</label>
                                    <input type="file" id="image" name="image"></input><br />
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

export default Website;