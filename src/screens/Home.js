import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderTab } from "../components";
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
