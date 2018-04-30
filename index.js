import { AppRegistry } from "react-native";
import _ from "lodash";
import { YellowBox } from "react-native";
import "color-term-console";
import { condensedJsonOutput, setColorTheme } from "color-term-console";

import App from "./src";

condensedJsonOutput(true);

setColorTheme({
  log: "orange"
});

console.disableYellowBox = true;
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

AppRegistry.registerComponent("RNGithub", () => App);
