import React, { Component } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button
} from "react-native-paper";

import { View, StyleSheet } from "react-native";
import SplashScreen from "react-native-smart-splash-screen";
import { RouteHelper } from "./utils";
import { Provider } from "mobx-react";

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
  componentDidMount() {
    // close splash screen
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500
    });
    this.registerRouterInterCepter();
  }
  registerRouterInterCepter = () => {
    RouteHelper.routeInterceptor = (routeName, params) => {
      console.log("App routeInterceptor", routeName);
      store.appStore.updateRoute(routeName);
      return true;
    };
  };

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
