import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class Popular extends Component {
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
    return (
      <View style={styles.container}>
        <Text>I'm the Popular component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
