import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteHelper } from "../utils";
export class Welcome extends Component {
  componentDidMount() {
    //RouteHelper.navigate("Tab");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Welcome component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
