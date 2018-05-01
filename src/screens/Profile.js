import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderTab } from "../components";
export class Profile extends Component {
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
    const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={styles.container}>
        <HeaderTab title={routeName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
