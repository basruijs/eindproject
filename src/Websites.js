import React, { Component } from "react";
import Website from "./Website.js";
import websites from './data/websites.json';

class Websites extends React.Component{
    constructor(props) {
        super(props);
        this.arrayMaxLength = 2;
    }

    componentDidMount(){

        var tempSites = this.state.websiteArray.sort((p1, p2) => (p1.clicks < p2.clicks) ? 1 : (p1.clicks > p2.clicks) ? -1 : 0);
        while(tempSites.length > this.arrayMaxLength){
            tempSites.pop()
        }
        this.setState({
            websiteArray: tempSites
        })
    }
    state = {
        websiteArray : websites.websites
    }


    render(){
        return (
            <div className="websites">
                {
                    this.state.websiteArray.map((website, index) =>
                    <Website
                    name={website.name}
                    url={website.url}
                    clicks={website.clicks}
                    img={website.image}
                    key={index.toString()}
                    />
                    )
                }
            </div>
        );
    };
}

export default Websites;