import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ListSection, ListItem, TouchableRipple } from "react-native-paper";
import JSONTree from "react-native-json-tree";
import { observer, inject } from "mobx-react/native";

import { HeaderTab } from "../components";

@inject("rootStore")
@observer
export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.observer = props.observer;
  }
  componentDidMount() {
    console.log("HomePage componentDidMount");
    this.observer.subscribe("initData", data => {
      console.log("home  event initData >> data: " + data);
      this.initData();
    });
  }
  componentWillUnmount() {
    console.log("HomePage componentWillUnmount");
    this.observer.unsubscribe("initData");
    console.log("HomePage unsubscribe initData");
  }

  initData = () => {
    console.log("HomePage >> initData");
    this.props.rootStore.popularStore.search({
      q: "react native",
      sort: "starts"
    });
  };
  render() {
    const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={styles.container}>
        <HeaderTab title={routeName} />
        <ScrollView>
          <JSONTree data={this.props.rootStore.popularStore.populars.items} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
