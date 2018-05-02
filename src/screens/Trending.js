import React, { Component } from "react";
import { HeaderTab } from "../components";
import { TrendingPage } from "../pages";
export class Trending extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Trending componentDidMount");
  }
  componentDidFocus() {
    console.log("Trending componentDidFocus");
    this.initData();
  }

  componentWillBlur() {
    console.log("Trending componentWillBlur");
  }
  componentWillUnmount() {
    console.log("Trending componentWillUnmount");
  }

  initData = () => {
    console.log("Trending >> initData");
  };
  render() {
    return <TrendingPage {...this.props} />;
  }
}
