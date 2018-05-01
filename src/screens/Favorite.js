import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    return (
      <View style={styles.container}>
        <Text>I'm the Favorite component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
