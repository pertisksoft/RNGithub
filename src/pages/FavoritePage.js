import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { observer, inject } from "mobx-react/native";
import { HeaderTab } from "../components";

//@inject("rootStore")
//@observer
export class FavoritePage extends Component {
  componentDidMount() {
    console.log("FavoritePage componentDidMount");
  }
  componentWillUnmount() {
    console.log("FavoritePage componentWillUnmount");
  }

  initData = () => {
    console.log("FavoritePage >> initData");
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
