import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json

import BackgroundImage from "./BackgroundImage";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Pre-Kindergarten 40 Words"
  };

  GetSectionListItem = item => {
    console.log("item = ", item);
    this.props.navigation.navigate("Details", {
      item: item
    });
  };

  render() {
    words_list = [
      {
        title: "A",
        data: ["a", "and", "away"]
      },
      {
        title: "B",
        data: ["big", "blue"]
      },
      {
        title: "C",
        data: ["can", "come"]
      },
      {
        title: "D",
        data: ["down"]
      },
      {
        title: "E",
        data: []
      },
      {
        title: "F",
        data: ["find", "for", "funny"]
      },
      {
        title: "G",
        data: ["go"]
      },
      {
        title: "H",
        data: ["help", "here"]
      },
      {
        title: "I",
        data: ["I", "in", "is", "it"]
      },
      {
        title: "J",
        data: ["jump"]
      },
      {
        title: "K",
        data: []
      },

      {
        title: "L",
        data: ["little", "look"]
      },

      {
        title: "M",
        data: ["make", "me", "my"]
      },
      {
        title: "N",
        data: ["not"]
      },
      {
        title: "O",
        data: ["one"]
      },
      {
        title: "P",
        data: ["play"]
      },
      {
        title: "Q",
        data: []
      },
      {
        title: "R",
        data: ["red", "run"]
      },
      {
        title: "S",
        data: ["said", "see"]
      },
      {
        title: "T",
        data: ["the", "three", "to", "two"]
      },
      {
        title: "U",
        data: ["up"]
      },
      {
        title: "V",
        data: [""]
      },
      {
        title: "W",
        data: ["we", "where"]
      },
      {
        title: "X",
        data: []
      },
      {
        title: "Y",
        data: ["yellow", "you"]
      },
      {
        title: "Z",
        data: []
      }
    ];

    return (
      <View style={styles.container}>
        <SectionList
          sections={words_list}
          renderSectionHeader={({ section }) => (
            <Text style={styles.SectionHeader}> {section.title} </Text>
          )}
          renderItem={({ item }) => (
            <Text
              style={styles.SectionListItemS}
              onPress={this.GetSectionListItem.bind(this, item)}
            >
              {" "}
              {item}{" "}
            </Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const item = navigation.getParam("item");

    const picture_name = "../assets/word_pictures/" + item + ".png";

    console.log("in DetailsScreen item = ", item);
    console.log("picture_name = ", picture_name);

    // return <BackgroundImage pic_path={picture_name} />;
    return <BackgroundImage pic_path={item} />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  SectionHeader: {
    backgroundColor: "#64B5F6",
    fontSize: 20,
    padding: 5,
    color: "#fff",
    fontWeight: "bold"
  },
  SectionListItemS: {
    fontSize: 16,
    padding: 6,
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
});
