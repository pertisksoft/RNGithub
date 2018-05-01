import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class Home extends Component {
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
    return (
      <View style={styles.container}>
        <Text>I'm the Home component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});