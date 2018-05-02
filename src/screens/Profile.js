import React, { Component } from "react";
import { HeaderTab } from "../components";
import { ProfilePage } from "../pages";
export class Profile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Profile componentDidMount");
  }
  componentDidFocus() {
    console.log("Profile componentDidFocus");
    this.initData();
  }

  componentWillBlur() {
    console.log("Profile componentWillBlur");
  }
  componentWillUnmount() {
    console.log("Profile componentWillUnmount");
  }

  initData = () => {
    console.log("Profile >> initData");
  };
  render() {
    return <ProfilePage {...this.props} />;
  }
}
