import React, { Component } from "react";
import quotes from './data/quotes.json';
import guard from './img/skyrim-guard.jpg';


class Quote extends React.Component {
    constructor(props) {
        super(props);
        var number = Math.floor(Math.random() * quotes.quotes.length);
        this.quoteObject = quotes.quotes.at(Math.floor(Math.random() * quotes.quotes.length))
        this.quote = this.quoteObject.quote;
    }

    state = {
        quote: this.quote
    }

    componentDidMount() {
        console.log(this.quote)
        this.setState({
            quote: this.quote
        })
    }


    render() {
        return (
            <div className="quote">
                <img className="guard" src={guard} />
                <p className="quoteText">"{this.state.quote}" <br/><span className="quoteSource">-Skyrim Guard</span></p>

            </div>
        );
    };
}

export default Quote;