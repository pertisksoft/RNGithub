import React, { Component } from "react";
import { HeaderTab } from "../components";
import { FavoritePage } from "../pages";
export class Favorite extends Component {
  componentDidMount() {
    console.log("Favorite componentDidMount");
  }
  componentDidFocus() {
    console.log("Favorite componentDidFocus");
    this.initData();
  }

  componentWillBlur() {
    console.log("Favorite componentWillBlur");
  }
  componentWillUnmount() {
    console.log("Favorite componentWillUnmount");
  }

  initData = () => {
    console.log("Favorite >> initData");
  };
  render() {
    return <FavoritePage {...this.props} />;
  }
}
