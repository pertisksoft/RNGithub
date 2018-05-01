import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderTab } from "../components";
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
