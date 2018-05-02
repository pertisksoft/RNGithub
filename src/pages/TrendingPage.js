import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react/native";
import { HeaderTab } from "../components";

@inject("rootStore")
@observer
export class TrendingPage extends Component {
  componentDidMount() {
    console.log("TrendingPage componentDidMount");
  }
  componentWillUnmount() {
    console.log("TrendingPage componentWillUnmount");
  }

  initData = () => {
    console.log("TrendingPage >> initData");
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
