function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import indiaLogo from './Images/india.png';
import usaLogo from './Images/usa.png';
import italyLogo from './Images/italy.png';
import ukLogo from './Images/uk.jpg';
import southAfricaLogo from './Images/south-africa.png';
import franceLogo from './Images/france.png';
import germanyLogo from './Images/germany.png';
import australiaLogo from './Images/australia.jpg';
import brazilLogo from './Images/brazil.png';
import isMobile from "is-mobile";
import data from './data/data.json'; // Add new Elements to list and increase id by 2 from previous item
// Add a link to the country's Logo if not present already

const notificationItems = data;

class FakeNotifications extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "Image", country => {
      country = country.toUpperCase();

      switch (country) {
        case "USA":
          return usaLogo;

        case "INDIA":
          return indiaLogo;

        case "ITALY":
          return italyLogo;

        case "UK":
          return ukLogo;

        case "SOUTH AFRICA":
          return southAfricaLogo;

        case "FRANCE":
          return franceLogo;

        case "BRAZIL":
          return brazilLogo;

        case "AUSTRALIA":
          return australiaLogo;

        case "GERMANY":
          return germanyLogo;

        default:
          return usaLogo;
      }
    });

    _defineProperty(this, "onClose", () => {
      this.setState({
        close: true
      });
    });

    _defineProperty(this, "RandomInteger", () => {
      return Math.floor(Math.random() * 10) + 1;
    });

    _defineProperty(this, "pickRandomObject", () => {
      let obj_keys = Object.keys(notificationItems["data"]);
      let ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
      let item = notificationItems["data"][ran_key];
      return item;
    });

    _defineProperty(this, "textCountryToShow", name => {
      switch (name) {
        case 'uk':
          return 'UK';

        case 'usa':
          return 'USA';

        default:
          return name[0].toUpperCase() + name.slice(1);
      }
    });

    this.state({
      close: false,
      item: null,
      show: true,
      time: 5000,
      showInMobile: false
    });
  }

  async Pass() {
    if (this.state.show) {
      this.setState({
        item: this.pickRandomObject(),
        show: !this.state.show
      });
    } else {
      this.setState({
        show: !this.state.show
      });
    }
  }

  componentDidMount() {
    let time = this.state.time;

    if (this.props.time) {
      time = this.props.time;
    }

    if (this.props.showInMobile) {
      this.setState({
        showInMobile: this.props.showInMobile
      });
    }

    this.interval = setInterval(() => this.Pass(), time);
  }

  render() {
    let item = this.state.item;

    if (item === null) {
      return /*#__PURE__*/React.createElement("div", null);
    }

    if (!this.state.showInMobile && isMobile()) {
      return /*#__PURE__*/React.createElement("div", null);
    }

    if (this.state.close || !this.state.show) {
      return /*#__PURE__*/React.createElement("div", null);
    } else {
      return /*#__PURE__*/React.createElement("section", {
        className: "custom-social-proof"
      }, /*#__PURE__*/React.createElement("div", {
        className: "custom-notification"
      }, /*#__PURE__*/React.createElement("div", {
        className: "custom-notification-container is-size-7"
      }, /*#__PURE__*/React.createElement("div", {
        className: "custom-notification-image-wrapper"
      }, /*#__PURE__*/React.createElement("img", {
        src: this.Image(item.country),
        alt: item.country
      })), /*#__PURE__*/React.createElement("div", {
        className: "custom-notification-content-wrapper"
      }, /*#__PURE__*/React.createElement("p", {
        className: "custom-notification-content"
      }, /*#__PURE__*/React.createElement("p", {
        className: "is-capitalized"
      }, item.name), " bought ", /*#__PURE__*/React.createElement("b", {
        className: "is-capitalized"
      }, item.plan, " subscription"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "about ", this.RandomInteger() + ' hours'), " ago from ", /*#__PURE__*/React.createElement("b", {
        className: "is-capitalized"
      }, this.textCountryToShow(item.country))))), /*#__PURE__*/React.createElement("div", {
        className: "custom-close",
        onClick: () => this.onClose()
      })));
    }
  }

}

export default FakeNotifications;