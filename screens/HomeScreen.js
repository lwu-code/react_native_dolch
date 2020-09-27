import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  Image,
  Platform,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={styles.container}
        source={require("../assets/word_pictures/home_background.jpg")}
        imageStyle={{ resizeMode: "cover" }}
      >
        {/* 61.8% is the golden ration */}
        <View style={[{ width: "61.8%", margin: 10 }]}>
          <TouchableOpacity onPress={() => navigate("Game")}>
            <Text style={styles.button}>Play</Text>
          </TouchableOpacity>

          {/* <Button title="Settings" onPress={() => navigate("Settings")} /> */}
          <TouchableOpacity onPress={() => navigate("Prek")}>
            <Text style={styles.button}>Pre Kingergarten</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("K")}>
            <Text style={styles.button}>Kingergarten</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("G1")}>
            <Text style={styles.button}>First Grade</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("G2")}>
            <Text style={styles.button}>Second Grade</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("G3")}>
            <Text style={styles.button}>Third Grade</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("AllWords")}>
            <Text style={styles.button}>All Dolch Words</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate("Settings")}>
            <Text style={styles.button}>Settings</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "purple",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "orange",
    fontSize: 24,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 12,
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
