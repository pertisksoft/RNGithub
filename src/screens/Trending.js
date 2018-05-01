import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    return (
      <View style={styles.container}>
        <Text>I'm the Trending component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
