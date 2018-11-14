/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Quote from "./src/Quote";

AppRegistry.registerComponent(appName, () => Quote);
