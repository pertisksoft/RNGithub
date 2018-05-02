import React, { Component } from "react";
import { HeaderTab } from "../components";
import { HomePage } from "../pages";
export class Home extends Component {
  constructor(props) {
    super(props);
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
  };
  render() {
    return <HomePage {...this.props} />;
  }
}
