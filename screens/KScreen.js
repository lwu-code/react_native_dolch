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
const KScreen = inject("GameStore")(
  observer(
    class SettingsScreen extends React.Component {
      static navigationOptions = {
        title: "Kindergarten 52 Words"
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
            data: ["all", "am", "are", "at", "ate"]
          },
          {
            title: "B",
            data: ["be", "black", "brown", "but"]
          },
          {
            title: "C",
            data: ["came"]
          },
          {
            title: "D",
            data: ["did", "do"]
          },
          {
            title: "E",
            data: ["eat"]
          },
          {
            title: "F",
            data: ["four"]
          },
          {
            title: "G",
            data: ["get", "good"]
          },
          {
            title: "H",
            data: ["have", "he"]
          },
          {
            title: "I",
            data: ["into"]
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
            data: ["like"]
          },

          {
            title: "M",
            data: ["must"]
          },
          {
            title: "N",
            data: ["new", "no", "now"]
          },
          {
            title: "O",
            data: ["on", "our", "out"]
          },
          {
            title: "P",
            data: ["please", "pretty"]
          },
          {
            title: "Q",
            data: []
          },
          {
            title: "R",
            data: ["ran", "ride"]
          },
          {
            title: "S",
            data: ["saw", "say", "she", "so", "soon"]
          },
          {
            title: "T",
            data: ["that", "there", "they", "this", "too"]
          },
          {
            title: "U",
            data: ["under"]
          },
          {
            title: "V",
            data: [""]
          },
          {
            title: "W",
            data: [
              "want",
              "was",
              "well",
              "went",
              "what",
              "white",
              "who",
              "will",
              "with"
            ]
          },
          {
            title: "X",
            data: []
          },
          {
            title: "Y",
            data: ["yes"]
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
export default KScreen;

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
