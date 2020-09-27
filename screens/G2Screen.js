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
const G2Screen = inject("GameStore")(
  observer(
    class SettingsScreen extends React.Component {
      static navigationOptions = {
        title: "Second Grade 46 Words"
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
            data: ["always", "around"]
          },
          {
            title: "B",
            data: ["because", "been", "before", "best", "both", "buy"]
          },
          {
            title: "C",
            data: ["call", "cold"]
          },
          {
            title: "D",
            data: ["does", "don’t"]
          },
          {
            title: "E",
            data: []
          },
          {
            title: "F",
            data: ["fast", "first", "five", "found"]
          },
          {
            title: "G",
            data: ["gave", "goes", "green"]
          },
          {
            title: "H",
            data: []
          },
          {
            title: "I",
            data: ["its"]
          },
          {
            title: "J",
            data: []
          },
          {
            title: "K",
            data: []
          },

          {
            title: "L",
            data: []
          },

          {
            title: "M",
            data: ["made", "many"]
          },
          {
            title: "N",
            data: []
          },
          {
            title: "O",
            data: ["off", "or"]
          },
          {
            title: "P",
            data: ["pull"]
          },
          {
            title: "Q",
            data: []
          },
          {
            title: "R",
            data: ["read", "right"]
          },
          {
            title: "S",
            data: ["sing", "sit", "sleep"]
          },
          {
            title: "T",
            data: ["tell", "their", "these", "those"]
          },
          {
            title: "U",
            data: ["upon", "us", "use"]
          },
          {
            title: "V",
            data: ["very"]
          },
          {
            title: "W",
            data: ["wash", "which", "why", "wish", "work", "would", "write"]
          },
          {
            title: "X",
            data: []
          },
          {
            title: "Y",
            data: ["your"]
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
export default G2Screen;

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
