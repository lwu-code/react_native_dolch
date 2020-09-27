import React from "react";
import {
  Button,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { inject, observer } from "mobx-react";

import { Platform } from "react-native";
import { Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import PreKScreen from "../screens/PrekScreen";
import KScreen from "../screens/KScreen";
import G1Screen from "../screens/G1Screen";
import G2Screen from "../screens/G2Screen";
import G3Screen from "../screens/G3Screen";
import AllScreen from "../screens/AllScreen";
import InfoScreen from "../screens/InfoScreen";
import ExampleScreen from "../screens/example";

const WordsScreen = inject("GameStore")(
  PreKScreen,
  KScreen,
  G1Screen,
  G2Screen,
  G3Screen,
  AllScreen
);
export default WordsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20
  },
  section: {
    marginBottom: 10
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 5,
    padding: 10
  },
  buttonWrapper: {
    marginTop: 5
  },
  inputWithButton: {
    flexDirection: "row"
  }
});
