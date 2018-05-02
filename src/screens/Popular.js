import React, { Component } from "react";
import { HeaderTab } from "../components";
import { PopularPage } from "../pages";
export class Popular extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Popular componentDidMount");
  }
  componentDidFocus() {
    console.log("Popular componentDidFocus");
    this.initData();
  }

  componentWillBlur() {
    console.log("Popular componentWillBlur");
  }
  componentWillUnmount() {
    console.log("Popular componentWillUnmount");
  }

  initData = () => {
    console.log("Popular >> initData");
  };
  render() {
    return <PopularPage {...this.props} />;
  }
}
