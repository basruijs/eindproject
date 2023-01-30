import React, { Component } from "react";
import quotes from './data/allquotes.json';
import quoters from './data/quoters.json';
import guard from './img/skyrim-guard.jpg';


class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.quoterNr = Math.floor(Math.random() * quoters.quoters.length)
        this.quoteObject = quotes.quotes.at(Math.floor(Math.random() * quotes.quotes.length))
        this.readerObject = quoters.quoters.at(this.quoterNr)
        this.quote = this.quoteObject.quote;
        this.reader = this.readerObject.quoter;
    }

    state = {
        quote: this.quote,
        reader: this.reader
    }

    componentDidMount() {
        console.log(this.reader)
        this.setState({
            quote: this.quote,
            reader: this.reader
        })
    }


    render() {
        return (
            <div className="manyQuotes">
                <img className="quoter" src={quoters.quoters[this.quoterNr].img} />
                <p className="quoteText">"{this.state.quote}" <span className="quoteSource">-{this.state.reader}</span></p>
            </div>
        );
    };
}

export default Quotes;