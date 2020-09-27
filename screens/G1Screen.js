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
const G1Screen = inject("GameStore")(
  observer(
    class SettingsScreen extends React.Component {
      static navigationOptions = {
        title: "First Grade 41 Words"
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
            data: ["after", "again", "an", "any", "as", "ask"]
          },
          {
            title: "B",
            data: ["by"]
          },
          {
            title: "C",
            data: ["could"]
          },
          {
            title: "D",
            data: ["did", "do"]
          },
          {
            title: "E",
            data: ["every"]
          },
          {
            title: "F",
            data: ["fly", "from"]
          },
          {
            title: "G",
            data: ["give", "going"]
          },
          {
            title: "H",
            data: ["had", "has", "her", "him", "his", "how"]
          },
          {
            title: "I",
            data: []
          },
          {
            title: "J",
            data: ["just"]
          },
          {
            title: "K",
            data: ["know"]
          },

          {
            title: "L",
            data: ["let", "live"]
          },

          {
            title: "M",
            data: ["may"]
          },
          {
            title: "N",
            data: []
          },
          {
            title: "O",
            data: ["of", "old", "once", "open", "over"]
          },
          {
            title: "P",
            data: ["put"]
          },
          {
            title: "Q",
            data: []
          },
          {
            title: "R",
            data: ["round"]
          },
          {
            title: "S",
            data: ["some", "stop"]
          },
          {
            title: "T",
            data: ["take", "thank", "them", "then", "think"]
          },
          {
            title: "U",
            data: []
          },
          {
            title: "V",
            data: []
          },
          {
            title: "W",
            data: ["walk", "were", "when"]
          },
          {
            title: "X",
            data: []
          },
          {
            title: "Y",
            data: []
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
export default G1Screen;

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
