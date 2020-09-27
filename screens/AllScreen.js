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
const AllScreen = inject("GameStore")(
  observer(
    class SettingsScreen extends React.Component {
      static navigationOptions = {
        title: "All Dolch 315 Sight Words"
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
            data: [
              "a",
              "about",
              "after",
              "again",
              "all",
              "always",
              "am",
              "an",
              "and",
              "any",
              "apple",
              "are",
              "around",
              "as",
              "ask",
              "at",
              "ate",
              "away"
            ]
          },
          {
            title: "B",
            data: [
              "baby",
              "back",
              "ball",
              "be",
              "bear",
              "because",
              "bed",
              "been",
              "before",
              "bell",
              "best",
              "better",
              "big",
              "bird",
              "birthday",
              "black",
              "blue",
              "boat",
              "both",
              "box",
              "boy",
              "bread",
              "bring",
              "brother",
              "brown",
              "but",
              "buy",
              "by"
            ]
          },
          {
            title: "C",
            data: [
              "cake",
              "call",
              "came",
              "can",
              "car",
              "carry",
              "cat",
              "chair",
              "chicken",
              "children",
              "Christmas",
              "clean",
              "coat",
              "cold",
              "come",
              "corn",
              "could",
              "cow",
              "cut"
            ]
          },
          {
            title: "D",
            data: [
              "day",
              "did",
              "do",
              "does",
              "dog",
              "doll",
              "done",
              "don’t",
              "door",
              "down",
              "draw",
              "drink",
              "duck"
            ]
          },
          {
            title: "E",
            data: ["eat", "egg", "eight", "every", "eye"]
          },
          {
            title: "F",
            data: [
              "fall",
              "far",
              "farm",
              "farmer",
              "fast",
              "father",
              "feet",
              "find",
              "fire",
              "first",
              "fish",
              "five",
              "floor",
              "flower",
              "fly",
              "for",
              "found",
              "four",
              "from",
              "full",
              "funny"
            ]
          },
          {
            title: "G",
            data: [
              "game",
              "garden",
              "gave",
              "get",
              "girl",
              "give",
              "go",
              "goes",
              "going",
              "good",
              "goodbye",
              "got",
              "grass",
              "green",
              "ground",
              "grow"
            ]
          },
          {
            title: "H",
            data: [
              "had",
              "hand",
              "has",
              "have",
              "he",
              "head",
              "help",
              "her",
              "here",
              "hill",
              "him",
              "his",
              "hold",
              "home",
              "horse",
              "hot",
              "house",
              "how",
              "hurt"
            ]
          },
          {
            title: "I",
            data: ["I", "if", "in", "into", "is", "it", "its"]
          },
          {
            title: "J",
            data: ["jump", "just"]
          },
          {
            title: "K",
            data: ["keep", "kind", "kitty", "know"]
          },

          {
            title: "L",
            data: [
              "laugh",
              "leg",
              "let",
              "letter",
              "light",
              "like",
              "little",
              "live",
              "long",
              "look"
            ]
          },

          {
            title: "M",
            data: [
              "made",
              "make",
              "man",
              "many",
              "may",
              "me",
              "men",
              "milk",
              "money",
              "morning",
              "mother",
              "much",
              "must",
              "my",
              "myself"
            ]
          },
          {
            title: "N",
            data: ["name", "nest", "never", "new", "night", "no", "not", "now"]
          },
          {
            title: "O",
            data: [
              "of",
              "off",
              "old",
              "on",
              "once",
              "one",
              "only",
              "open",
              "or",
              "our",
              "out",
              "over",
              "own"
            ]
          },
          {
            title: "P",
            data: [
              "paper",
              "party",
              "pick",
              "picture",
              "pig",
              "play",
              "please",
              "pretty",
              "pull",
              "put"
            ]
          },
          {
            title: "Q",
            data: []
          },
          {
            title: "R",
            data: [
              "rabbit",
              "rain",
              "ran",
              "read",
              "red",
              "ride",
              "right",
              "ring",
              "robin",
              "round",
              "run"
            ]
          },
          {
            title: "S",
            data: [
              "said",
              "Santa",
              "saw",
              "say",
              "school",
              "see",
              "seed",
              "seven",
              "shall",
              "she",
              "sheep",
              "shoe",
              "show",
              "sing",
              "sister",
              "sit",
              "six",
              "sleep",
              "small",
              "snow",
              "so",
              "some",
              "song",
              "soon",
              "squirrel",
              "start",
              "stick",
              "stop",
              "street",
              "sun"
            ]
          },
          {
            title: "T",
            data: [
              "table",
              "take",
              "tell",
              "ten",
              "thank",
              "that",
              "the",
              "their",
              "them",
              "then",
              "there",
              "these",
              "they",
              "thing",
              "think",
              "this",
              "those",
              "three",
              "time",
              "to",
              "today",
              "together",
              "too",
              "top",
              "toy",
              "tree",
              "try",
              "two"
            ]
          },
          {
            title: "U",
            data: ["under", "up", "upon", "us", "use"]
          },
          {
            title: "V",
            data: ["very"]
          },
          {
            title: "W",
            data: [
              "walk",
              "want",
              "warm",
              "was",
              "wash",
              "watch",
              "water",
              "way",
              "we",
              "well",
              "went",
              "were",
              "what",
              "when",
              "where",
              "which",
              "white",
              "who",
              "why",
              "will",
              "wind",
              "window",
              "wish",
              "with",
              "wood",
              "work",
              "would",
              "write"
            ]
          },
          {
            title: "X",
            data: []
          },
          {
            title: "Y",
            data: ["yellow", "yes", "you", "your"]
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
export default AllScreen;

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
