import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderTab } from "../components";
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
