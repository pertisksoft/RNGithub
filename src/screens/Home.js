import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react/native";
import { HeaderTab } from "../components";

@inject("rootStore")
@observer
export class Home extends Component {
  componentDidMount() {
    console.log("Home componentDidMount");
    this.initData();
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
    this.props.rootStore.popularStore.search({
      q: "javascript",
      sort: "starts"
    });
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
