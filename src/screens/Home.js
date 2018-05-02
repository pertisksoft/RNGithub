import React, { Component } from "react";
import ReactObserver from "react-event-observer";
import { HeaderTab } from "../components";
import { HomePage } from "../pages";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.observer = ReactObserver();
  }
  componentDidMount() {
    console.log("Home componentDidMount");
  }
  componentDidFocus() {
    console.log("Home componentDidFocus");
    this.initData();
  }

  componentWillBlur() {
    console.log("Home componentWillBlur");
  }
  componentWillUnmount() {
    console.log("Home componentWillUnmount");
  }

  initData = () => {
    console.log("Home >> initData");
    this.observer.publish("initData", "Home");
  };
  render() {
    return <HomePage observer={this.observer} {...this.props} />;
  }
}
