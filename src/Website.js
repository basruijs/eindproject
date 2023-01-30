import React, { Component } from "react";
import ReactDOM from 'react-dom';

class Website extends React.Component {
    constructor(props) {
        

        super(props);

    }

    state = {
        check : this.props.status
    }



    render() {
        return (
            <div className="website">
                <p>Name: {this.props.name}</p>
                <img src={this.props.img}></img>
                URL: {this.props.url}<br/>
                Clicks: {this.props.clicks}<br/>
            </div>
        );
    };
}

export default Website;