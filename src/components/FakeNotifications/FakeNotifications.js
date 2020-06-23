import React from 'react'
import indiaLogo from './Images/india.png'
import usaLogo from './Images/usa.png'
import italyLogo from './Images/italy.png'
import ukLogo from './Images/uk.jpg'
import southAfricaLogo from './Images/south-africa.png'
import franceLogo from './Images/france.png'
import germanyLogo from './Images/germany.png'
import australiaLogo from './Images/australia.jpg'
import brazilLogo from './Images/brazil.png'
import isMobile from "is-mobile";
import data from './data/data.json'

// Add a link to the country's Logo if not present already
const notificationItems = data

class FakeNotifications extends React.Component {
    state = {
        close: false,
        item: null,
        show: true,
        time: 5000,
        showInMobile: false
    }

    Image = (country) => {
        country = country.toUpperCase();
        switch (country) {
            case "USA": return (usaLogo)
            case "INDIA": return (indiaLogo)
            case "ITALY": return (italyLogo)
            case "UK": return (ukLogo)
            case "SOUTH AFRICA": return (southAfricaLogo)
            case "FRANCE": return (franceLogo)
            case "BRAZIL": return (brazilLogo)
            case "AUSTRALIA": return (australiaLogo)
            case "GERMANY": return (germanyLogo)
            default: return (usaLogo)
        }
    }

    onClose = () => {
        this.setState({close: true})
    }

    RandomInteger = () => {
        return (
            Math.floor(
                Math.random() * (10)
            ) + 1
        )
    }

    pickRandomObject = () => {
        let obj_keys = Object.keys(notificationItems["data"]);
        let ran_key = obj_keys[Math.floor(Math.random()*obj_keys.length)];
        let item = notificationItems["data"][ran_key];
        return (item)
    }

    async Pass() {
        if(this.state.show) {
            this.setState({
                item: this.pickRandomObject(),
                show: !this.state.show
            })
        } else {
            this.setState({
                show: !this.state.show
            })
        }
    }

    textCountryToShow = (name) => {
        switch(name) {
            case 'uk': return 'UK';
            case 'usa': return 'USA';
            default: return( name[0].toUpperCase() + name.slice(1))
        }
    }

    componentDidMount() {
        let time = this.state.time;
        if(this.props.time) {
            time = this.props.time;
        }
        if(this.props.showInMobile) {
            this.setState({showInMobile: this.props.showInMobile})
        }
        this.interval = setInterval(() =>
                this.Pass(),
            time);
    }

    render() {
        let item = this.state.item;
        if(item === null) {
            return <div />
        }
        if(!this.state.showInMobile && isMobile()) {
            return <div />
        }
            if(this.state.close || !this.state.show) {
                return <div />
            }
            else {
                return (
                    <section className="custom-social-proof">
                            <div className="custom-notification">
                                <div className="custom-notification-container is-size-7">
                                    <div className="custom-notification-image-wrapper">
                                        <img src={this.Image(item.country)} alt={item.country}/>
                                    </div>
                                    <div className="custom-notification-content-wrapper">
                                        <p className="custom-notification-content">
                                            <span>{item.name}</span> bought <b className="is-capitalized">{item.plan} subscription</b>
                                            <br />
                                            <b>about {this.RandomInteger() + ' hours'}</b> ago from <b className="is-capitalized">{this.textCountryToShow(item.country)}</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="custom-close" onClick={()=>this.onClose()}/>
                            </div>
                    </section>
                );
            }
    }
}

export default FakeNotifications;