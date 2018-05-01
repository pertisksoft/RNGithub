import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    return (
      <View style={styles.container}>
        <Text>I'm the Profile component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
