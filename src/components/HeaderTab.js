import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  Toolbar,
  ToolbarBackAction,
  ToolbarContent,
  ToolbarAction
} from "react-native-paper";
import { RouteHelper } from "../utils";
export class HeaderTab extends Component {
  goBack = () => {
    RouteHelper.goBack();
  };
  onSearch = payload => {};
  onMore = () => {};
  render() {
    const { title } = this.props;
    return (
      <Toolbar>
        <ToolbarBackAction onPress={this.goBack} />
        <ToolbarContent title={title} />
      </Toolbar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
