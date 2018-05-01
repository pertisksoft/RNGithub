import React, { Component } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button
} from "react-native-paper";
import { Provider } from "mobx-react";
import { View, StyleSheet } from "react-native";

import { AppNavigator } from "./RouteConfig";
import store from "./stores";
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
      <Provider rootStore={store}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
