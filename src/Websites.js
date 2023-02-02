import React, { Component } from "react";
import Website from "./Website.js";
import websites from './data/websites.json';

class Websites extends React.Component{
    constructor(props) {
        super(props);
        this.arrayMaxLength = 2;
    }


    state = {
        websiteArray : websites.websites,
        sitesArrayLong : [],
        siteArray: []
    }

    componentDidMount(){
        var tempSites = this.state.websiteArray.sort((p1, p2) => (p1.clicks < p2.clicks) ? 1 : (p1.clicks > p2.clicks) ? -1 : 0);
        this.setState({
            totalSites: tempSites.length,
            sitesArrayLong : tempSites,
            siteArray: tempSites.slice(0, this.arrayMaxLength)
        })
        this.setState({})
        console.log(this.state.sitesArrayLong)
    }

    render(){
        if(this.state.websiteArray.length > 1){
        if(this.props.maxSites == 0){
            return (
            <div className="websitesLarge">
                {              
                    this.state.sitesArrayLong.map((website, index) =>
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
        } else {
        return (
            <div className="websites">
                {
                    this.state.siteArray.map((website, index) =>
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
            }
        }
    };
}

export default Websites;