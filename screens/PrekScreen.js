import React from "react";
import {
  Button,
  Slider,
  StyleSheet,
  Text,
  TextInput,
  View,
  SectionList
} from "react-native";
import { inject, observer } from "mobx-react";
import { createStackNavigator, createAppContainer } from "react-navigation"; // Version can be specified in package.json
import BackgroundImage from "./BackgroundImage";
const PrekScreen = inject("GameStore")(
  observer(
    class SettingsScreen extends React.Component {
      static navigationOptions = {
        title: "Pre-Kindergarten 40 Words"
      };

      // const { navigate } = this.props.navigation
      GetSectionListItem = item => {
        const { navigate } = this.props.navigation;
        console.log("2 item = ", item);
        // this.props.navigation.navigate("Details", {
        //   item: item
        // });
        // return <BackgroundImage pic_path={item} />;

        // navigate("Settings");
        navigate("WordImage", { pic_path: item });
      };

      render() {
        // const { navigate } = this.props.navigation;
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
  )
);
export default PrekScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginHorizontal: 20,
    // marginVertical: 20
  },
  section: {
    // marginBottom: 10
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 5,
    padding: 10
  },
  buttonWrapper: {
    // marginTop: 5
  },
  inputWithButton: {
    flexDirection: "row"
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
