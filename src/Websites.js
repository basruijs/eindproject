import React, { Component } from "react";
import Website from "./Website.js";
import websites from './data/websites.json';
import Popup from 'reactjs-popup';

class Websites extends React.Component {
    constructor(props) {
        super(props);
        this.arrayMaxLength = 2;
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        websiteArray: websites.websites,
        sitesArrayLong: [],
        siteArray: [],
        sitesFiltered: []
    }

    componentDidMount() {
        var tempSites = this.state.websiteArray.sort((p1, p2) => (p1.clicks < p2.clicks) ? 1 : (p1.clicks > p2.clicks) ? -1 : 0);
        this.setState({
            totalSites: tempSites.length,
            sitesArrayLong: tempSites,
            sitesFiltered: tempSites,
            siteArray: tempSites.slice(0, this.arrayMaxLength)
        })
        // this.setState({sitesFiltered: this.state.sitesArrayLong})

        this.setState({})
        console.log(this.state.sitesArrayLong)
    }

    handleChange(event) {
        var allsites = document.getElementById("allsites").checked
        // var incompleted = document.getElementById("topsites").checked
        if (allsites) {
            this.setState({ sitesFiltered: this.state.sitesArrayLong })
        } else {
            this.setState({ sitesFiltered: this.state.siteArray })
        }
        this.setState({})
    }


    render() {
        if (this.state.websiteArray.length > 1) {
            if (this.props.maxSites == 0) {
                return (
                    <div>
                        <Popup
                            trigger={<button className="addTask" onClick={this.addSite} >Add site</button>}
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
                                            <input  type="file" id="image" name="image"></input><br />
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
                        <div className="websitesLarge">
                            <form>
                                All sites<input defaultChecked type="radio" id="allsites" name="filter" onChange={this.handleChange} />
                                Top sites<input type="radio" id="topsites" name="filter" onChange={this.handleChange} />
                            </form>
                            {
                                this.state.sitesFiltered.map((website, index) =>
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