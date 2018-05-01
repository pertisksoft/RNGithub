import React, { Component } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { AppNavigator } from "./RouteConfig";
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
    //primary: "#ff5722",
    //accent: "yellow"
  }
};
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
