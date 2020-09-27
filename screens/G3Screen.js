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
const G3Screen = inject("GameStore")(
  observer(
    class SettingsScreen extends React.Component {
      static navigationOptions = {
        title: "Third Grade 41 Words"
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
            data: ["about"]
          },
          {
            title: "B",
            data: ["better", "bring"]
          },
          {
            title: "C",
            data: ["carry", "clean", "cut"]
          },
          {
            title: "D",
            data: ["done", "draw", "drink"]
          },
          {
            title: "E",
            data: ["eight"]
          },
          {
            title: "F",
            data: ["fall", "far", "full"]
          },
          {
            title: "G",
            data: ["got", "grow"]
          },
          {
            title: "H",
            data: ["hold", "hot", "hurt"]
          },
          {
            title: "I",
            data: ["if"]
          },
          {
            title: "J",
            data: []
          },
          {
            title: "K",
            data: ["keep", "kind"]
          },

          {
            title: "L",
            data: ["laugh", "light", "long"]
          },

          {
            title: "M",
            data: ["much", "myself"]
          },
          {
            title: "N",
            data: ["never"]
          },
          {
            title: "O",
            data: ["only", "own"]
          },
          {
            title: "P",
            data: ["pick"]
          },
          {
            title: "Q",
            data: []
          },
          {
            title: "R",
            data: []
          },
          {
            title: "S",
            data: ["seven", "shall", "show", "six", "small", "start"]
          },
          {
            title: "T",
            data: ["ten", "today", "together", "try"]
          },
          {
            title: "U",
            data: []
          },
          {
            title: "V",
            data: [""]
          },
          {
            title: "W",
            data: ["warm"]
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
export default G3Screen;

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
