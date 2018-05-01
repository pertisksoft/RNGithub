import React, { Component } from "react";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Button
} from "react-native-paper";
import { View, StyleSheet } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
    //primary: "#ff5722",
    //accent: "yellow"
  }
};

export default class App extends Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <Button primary raised onPress={() => console.log("Pressed")}>
            Press me
          </Button>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
