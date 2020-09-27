import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import GameScreen from "./GameScreen";
import SettingsScreen from "./SettingsScreen";
import WordsScreen from "./WordsScreen";

import PrekScreen from "./PrekScreen";
import KScren from "./KScreen";
import G1Screen from "./G1Screen";
import G2Screen from "./G2Screen";
import G3Screen from "./G3Screen";

import AllScreen from "./AllScreen";

import BackgroundImage from "./BackgroundImage";

export default createAppContainer(
  createStackNavigator({
    Home: { screen: HomeScreen },
    Game: { screen: GameScreen },
    Settings: { screen: SettingsScreen },
    Words: { screen: WordsScreen },
    Prek: { screen: PrekScreen },
    K: { screen: KScren },
    G1: { screen: G1Screen },
    G2: { screen: G2Screen },
    G3: { screen: G3Screen },
    AllWords: { screen: AllScreen },
    WordImage: { screen: BackgroundImage }
  })
);
