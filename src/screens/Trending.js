import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderTab } from "../components";
export class Trending extends Component {
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
