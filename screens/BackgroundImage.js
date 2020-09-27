// import React, { Component } from "react";
// import {
//   Button,
//   View,
//   Text,
//   SectionList,
//   StyleSheet,
//   FlatList,
//   Dimensions,
//   TouchableOpacity
// } from "react-native";
// import Image from "react-native-scalable-image";

// import WordImages from "./WordImages";
// import Grid from "react-native-grid-component";

// export default class BackgroundImage extends Component {
//   constructor(props) {
//     super(props);
//     const { navigation } = this.props;
//     const pic_path = navigation.getParam("pic_path", "apple");
//     console.log("constructor pic_path = ", pic_path);

//     this.state = { image_name: pic_path };
//   }

//   // static navigationOptions = {
//   //   title: "Word Image"

//   // };

//   static navigationOptions = ({ navigation }) => ({
//     title: navigation.state.params.image_name
//   });

//   renderItem = ({ item }) => (
//     <View>
//       <Image width={Dimensions.get("window").width} source={WordImages[item]} />
//     </View>
//   );

//   _renderItem = (data, i) => (
//     // <View style={[{ backgroundColor: data }, styles.item]} key={i} />
//     <TouchableOpacity onPress={() => navigate("Game")}>
//       <Text style={styles.button}>{i}</Text>
//     </TouchableOpacity>
//   );

//   _renderPlaceholder = i => <View style={styles.item} key={i} />;
//   state = {
//     textValue: "Change me"
//   };

//   onPress = () => {
//     this.setState({
//       textValue: "THE NEW TEXT GOES HERE"
//     });
//   };
//   render() {
//     console.log(
//       "5 inBackgroundImage this.props.pic_path = ",
//       this.props.pic_path
//     );

//     let randomNumber = Array.from({ length: 6 }, () =>
//       Math.floor(Math.random() * 39)
//     );
//     console.log(randomNumber);

//     let data = ["apple"];

//     console.log(" this.state.image_name = ", this.state.image_name);

//     if (this.state.image_name in WordImages) {
//       console.log("find picture in WordImages");
//       data = [this.state.image_name];
//     } else {
//       console.log("no picture in WordImages, use default one");
//     }

//     return (
//       <View style={{ paddingTop: 25 }}>
//         <Text>{this.state.textValue}</Text>
//         <Button title="Change Text" onPress={this.onPress} />
//       </View>
//     );

//     // return <FlatList data={data} renderItem={this.renderItem} />;
//   }
// }

// var image_styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 20,
//     width: null,
//     height: null,
//     resizeMode: "cover"
//   },

//   text: {
//     textAlign: "center",
//     color: "white",
//     backgroundColor: "rgba(0,0,0,0)",
//     fontSize: 32
//   }
// });
// const styles = StyleSheet.create({
//   item: {
//     flex: 1,
//     height: 50,
//     width: 50,
//     margin: 1
//   },
//   list: {
//     flex: 1
//   }
// });
//// new
// import React, { Component } from "react";
// import {
//   Alert,
//   AppRegistry,
//   Button,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity
// } from "react-native";
// import SortableGrid from "react-native-sortable-grid";
// import LetterGifs from "./LetterGifs";

// export default class BackgroundImage extends Component {
//   constructor(props) {
//     super(props);

//     const { navigation } = this.props;
//     const pic_path = navigation.getParam("pic_path", "apple");
//     console.log("constructor pic_path = ", pic_path);

//     this.state = {
//       inputText: "",
//       rightWord: pic_path,
//       ColorHolder: "#00BCD4"
//     };

//     var unique_set = new Set(pic_path.toLowerCase());

//     var candidates_array = "abcdefghijklmnopqrstuvwxyz".split("");

//     while (unique_set.size < 9) {
//       var random_number = Math.floor(Math.random() * 26 + 1);

//       var candidate_c = candidates_array[random_number];

//       if (unique_set.has(candidate_c) == false) {
//         unique_set.add(candidate_c);
//       }
//     }

//     console.log("3 unique_set = ", unique_set);
//     this.alphabets = [...unique_set];

//     var need_upper_case = Math.floor(Math.random() * 10 + 1);
//     console.log("need_upper_case = ", need_upper_case);

//     if (need_upper_case % 2 == 0) {
//       this.alphabets = this.alphabets.map(a => a.toUpperCase());
//     }

//     console.log("this.alphabets = ", this.alphabets);

//     var shuffle = require("shuffle-array");
//     shuffle(this.alphabets);
//   }

//   ChangeColorFunction = () => {
//     var ColorCode =
//       "rgb(" +
//       Math.floor(Math.random() * 256) +
//       "," +
//       Math.floor(Math.random() * 256) +
//       "," +
//       Math.floor(Math.random() * 256) +
//       ")";

//     console.log("ChangeColorFunction ColorCode = ", ColorCode);
//     this.setState({
//       ColorHolder: ColorCode
//     });
//   };
//   _onPressButton(event, buttonId) {
//     // Alert.alert("You tapped the button!", buttonId);
//     this.setState({ inputText: this.state.inputText + buttonId });

//     console.log("this.state.inputText = ", this.state.inputText);
//     console.log("this.state.rightWord = ", this.state.rightWord);

//     console.log(
//       "this.state.inputText == this.state.rightWord = ",
//       this.state.inputText.toUpperCase() == this.state.rightWord.toUpperCase()
//     );
//     if (
//       this.state.inputText.toUpperCase() == this.state.rightWord.toUpperCase()
//     ) {
//       console.log("typed the right word");
//     }

//     this.ChangeColorFunction();
//   }

//   _onDeleteLastCharacter(event) {
//     this.setState({
//       inputText: this.state.inputText.substring(
//         0,
//         this.state.inputText.length - 1
//       )
//     });

//     console.log("_onDeleteLastCharacter called");
//   }

//   _onHint(event) {
//     console.log("_onHint called, need to show", this.state.rightWord);
//   }

//   getColor() {
//     let r = this.randomRGB();
//     let g = this.randomRGB();
//     let b = this.randomRGB();
//     return "rgb(" + r + ", " + g + ", " + b + ")";
//   }
//   randomRGB = () => 160 + Math.random() * 85;

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 2, backgroundColor: this.state.ColorHolder }} />
//         <View style={{ flex: 1, backgroundColor: "skyblue" }}>
//           <View style={{ flexDirection: "row" }}>
//             <Text> What is the word you just learned </Text>
//             <Button
//               onPress={event => this._onHint(event)}
//               title="?"
//               color="#841584"
//             />
//           </View>

//           <Text>What is the word you just learned 2?</Text>
//           <Text>{this.state.inputText}</Text>
//           <View style={styles.buttonContainer}>
//             <Button
//               onPress={event => this._onDeleteLastCharacter(event)}
//               title="Delete"
//               color="#841584"
//             />
//           </View>
//         </View>
//         <View style={{ flex: 3, backgroundColor: "steelblue" }}>
//           <View style={styles.test}>
//             <SortableGrid
//               blockTransitionDuration={400}
//               activeBlockCenteringDuration={200}
//               itemsPerRow={3}
//               dragActivationTreshold={200}
//               onDragRelease={itemOrder =>
//                 console.log(
//                   "Drag was released, the blocks are in the following order: ",
//                   itemOrder
//                 )
//               }
//               onDragStart={() =>
//                 console.log("Some block is being dragged now!")
//               }
//             >
//               {this.alphabets.map((letter, index) => (
//                 <View
//                   key={index}
//                   style={[styles.block, { backgroundColor: this.getColor() }]}
//                   onTap={event => this._onPressButton(event, letter)}
//                 >
//                   <Text adjustsFontSizeToFit>{letter}</Text>
//                 </View>
//               ))}
//             </SortableGrid>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   buttonContainer: {
//     margin: 10
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   block: {
//     flex: 1,
//     margin: 8,
//     borderRadius: 10,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   test: {
//     marginLeft: 100,
//     marginRight: 100
//   }
// });
/*This is an Example of Grid Image Gallery in React Native*/
import * as React from "react";
//import React in our project
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Modal,
  StyleSheet,
  Button,
  TextInput,
  Keyboard
} from "react-native";
//import all the needed components

import PhotoGrid from "react-native-image-grid";
import SortableGrid from "react-native-sortable-grid";
import Icon from "react-native-vector-icons/FontAwesome";

export default class BackgroundImage extends React.Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    const pic_path = navigation.getParam("pic_path", "apple").toLowerCase();
    console.log("constructor pic_path = ", pic_path);

    var character = "a";
    var image_items = [];
    for (var i = 0; i < pic_path.length; i++) {
      character = pic_path.charAt(i);

      var image_path = "../assets/gifs/" + character + ".gif";
      image_items.push({ id: i, src: image_path });
    }

    this.state = {
      items: image_items,
      imageuri: "",
      ModalVisibleStatus: true,
      word: "",
      word_length: 0,
      ColorHolder: "#00BCD4",
      flagImage: false,
      rightWord: pic_path
    };
    this.word = pic_path;
    this.state.word_length = pic_path.length;

    console.log(
      "1 constructor this.state.word_length = ",
      this.state.word_length
    );
    console.log("1 constructor this.state.rightWord = ", this.state.rightWord);

    console.log(
      "2 constructor this.state.word_length = ",
      this.state.word_length
    );

    // this.state.items = image_items;
    var unique_set = new Set(pic_path.toLowerCase());

    var candidates_array = "abcdefghijklmnopqrstuvwxyz".split("");

    while (unique_set.size < 9) {
      var random_number = Math.floor(Math.random() * 26 + 1);

      var candidate_c = candidates_array[random_number];
      console.log("candidate_c = ", candidate_c);

      if (typeof candidate_c === "undefined") {
        continue;
      } else if (unique_set.has(candidate_c) == false) {
        unique_set.add(candidate_c);
      }
    }

    console.log("3 unique_set = ", unique_set);
    this.alphabets = [...unique_set];

    var need_upper_case = Math.floor(Math.random() * 10 + 1);
    console.log("need_upper_case = ", need_upper_case);

    if (need_upper_case % 2 == 0) {
      this.alphabets = this.alphabets.map(a => a.toUpperCase());
    }

    var shuffle = require("shuffle-array");
    shuffle(this.alphabets);
    console.log("this.alphabets = ", this.alphabets);

    for (var i = 0; i < this.alphabets.length; i++) {
      console.log(this.alphabets[i]);
      if (typeof this.alphabets[i] === "undefined") {
        alert("undefined");
        alert(this.alphabets);
      }
      //Do something
    }
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(9)).map((v, i) => {
      return { id: i, src: "../assets/gifs/a.gif" };
    });
  }

  ChangeColorFunction = () => {
    var ColorCode =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";

    console.log("ChangeColorFunction ColorCode = ", ColorCode);
    this.setState({
      ColorHolder: ColorCode
    });
  };

  _onPressButton(event, buttonId) {
    // Alert.alert("You tapped the button!", buttonId);
    this.setState({ word: this.state.word + buttonId });

    console.log("this.state.word = ", this.state.word);
    // console.log("this.state.word = ", this.state.word);

    console.log(
      "this.state.word == this.state.word = ",
      this.state.word.toUpperCase() == this.state.word.toUpperCase()
    );
    if (this.state.word.toUpperCase() == this.state.rightWord.toUpperCase()) {
      console.log("typed the right word");
      this.setState({
        flagImage: true
      });
    } else {
      this.setState({
        flagImage: false
      });
    }

    this.ChangeColorFunction();
  }
  _onDeleteLastCharacter(event) {
    console.log("_onDeleteLastCharacter called");
    var tmpStr = this.state.word.substring(0, this.state.word.length - 1);
    console.log("tmpStr = ", tmpStr);
    this.setState({
      word: tmpStr
    });
    console.log("this.state.word = ", this.state.word);

    if (tmpStr.toUpperCase() == this.state.rightWord.toUpperCase()) {
      console.log("typed the right word");
      this.setState({
        flagImage: true
      });
    } else {
      this.setState({
        flagImage: false
      });
    }
  }

  _onHint(event) {
    console.log("_onHint called, need to show", this.state.word);
    alert("use the input pad to type the word you just learned");
  }

  getColor() {
    let r = this.randomRGB();
    let g = this.randomRGB();
    let b = this.randomRGB();
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
  randomRGB = () => 160 + Math.random() * 85;
  renderHeader() {
    //Header of the Screen
    return (
      <Text
        style={{
          padding: 16,
          fontSize: 20,
          color: "white",
          backgroundColor: "green"
        }}
      >
        Image Gallery
      </Text>
    );
  }
  // renderItem2(item, itemSize) {
  //   console.log("itemSize = ", itemSize);
  //   return (
  //     <TouchableOpacity
  //       key={item.id}
  //       style={{ width: 50, height: itemSize }}
  //       onPress={() => {
  //         // Do Something
  //       }}
  //     >
  //       <Image
  //         resizeMode="cover"
  //         style={{ flex: 1 }}
  //         // source={{ uri: item.src }}
  //         source={require("../assets/gifs/z.gif")}
  //       />
  //     </TouchableOpacity>
  //   );
  // }
  renderItem(item, itemSize, itemPaddingHorizontal) {
    //Single item of Grid
    // console.log("renderItem item = ", item);
    console.log("item.src = ", item.src);
    console.log("itemSize = ", itemSize);

    // return (
    //   <Image
    //     style={styles.imageStyle}
    //     resizeMode="contain"
    //     source={require("../assets/gifs/a.gif")}
    //   />
    // );

    switch (item.src) {
      case "../assets/gifs/a.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/a.gif")}
          />
        );

        break;
      case "../assets/gifs/b.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/b.gif")}
          />
        );

        break;
      case "../assets/gifs/c.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/c.gif")}
          />
        );

        break;
      case "../assets/gifs/d.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/d.gif")}
          />
        );

        break;
      case "../assets/gifs/e.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/e.gif")}
          />
        );

        break;
      case "../assets/gifs/f.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/f.gif")}
          />
        );

        break;
      case "../assets/gifs/g.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/g.gif")}
          />
        );

        break;
      case "../assets/gifs/h.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/h.gif")}
          />
        );

        break;

      case "../assets/gifs/i.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/i.gif")}
          />
        );

        break;

      case "../assets/gifs/j.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/j.gif")}
          />
        );
        break;
      case "../assets/gifs/k.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/k.gif")}
          />
        );
        break;
      case "../assets/gifs/l.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/l.gif")}
          />
        );
        break;
      case "../assets/gifs/m.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/m.gif")}
          />
        );
        break;
      case "../assets/gifs/n.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/n.gif")}
          />
        );
        break;
      case "../assets/gifs/o.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/o.gif")}
          />
        );
        break;
      case "../assets/gifs/p.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/p.gif")}
          />
        );
        break;
      case "../assets/gifs/q.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/q.gif")}
          />
        );
        break;
      case "../assets/gifs/r.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/r.gif")}
          />
        );
        break;
      case "../assets/gifs/s.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/s.gif")}
          />
        );
        break;
      case "../assets/gifs/t.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/t.gif")}
          />
        );
        break;
      case "../assets/gifs/u.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/u.gif")}
          />
        );
        break;
      case "../assets/gifs/v.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/v.gif")}
          />
        );
        break;
      case "../assets/gifs/w.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/w.gif")}
          />
        );
        break;
      case "../assets/gifs/x.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/x.gif")}
          />
        );
        break;
      case "../assets/gifs/y.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/y.gif")}
          />
        );
        break;
      case "../assets/gifs/z.gif":
        return (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../assets/gifs/z.gif")}
          />
        );
        break;
      default:
    }
  }
  changeImage() {
    this.setState({
      flagImage: !this.state.flagImage
    });
  }
  render() {
    // if (this.state.ModalVisibleStatus) {
    if (false) {
      //Modal to show full image with close button
      console.log("if return");
      return <View style={{ flex: 1 }} />;
    } else {
      //Photo Grid of images
      // console.log("else return");
      // console.log("this.state.word_length = ", this.state.word_length);
      // console.log("this.state = ", this.state);

      return (
        <View style={{ flex: 3, backgroundColor: this.state.ColorHolder }}>
          <View style={styles.containerStyle}>
            <PhotoGrid
              data={this.state.items}
              itemsPerRow={this.state.word_length}
              //You can decide the item per row
              itemMargin={0}
              itemPaddingHorizontal={0}
              // renderHeader={this.renderHeader}
              renderItem={this.renderItem.bind(this)}
            />
          </View>

          {/* <View style={{ flex: 2, backgroundColor: this.state.ColorHolder }} /> */}

          <View
            style={{
              flex: 1,

              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              margin: 10
            }}
          >
            <Icon
              style={{
                margin: 10
              }}
              raised
              name="question"
              type="font-awesome"
              color="#f50"
              size={20}
              onPress={event => this._onHint(event)}
            />
            <Icon
              style={{
                margin: 10
              }}
              raised
              name="undo"
              type="font-awesome"
              color="#f50"
              size={20}
              // onPress={event => this._onDeleteLastCharacter(event)}
              onPress={event => this._onDeleteLastCharacter(event)}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                width: "61.8%"
              }}
              // onChangeText={text => this.setState({ text })}
              value={this.state.word}
              editable={false}
              textAlign={"center"}
            />

            <View
              style={{
                flex: 0.5,

                flexDirection: "row",
                justifyContent: "center",
                width: "50%",
                margin: 0
              }}
            >
              <Image
                source={
                  this.state.flagImage === true
                    ? require("../assets/gifs/celebrate.gif")
                    : require("../assets/gifs/question_transparent.gif")
                }
              />
            </View>

            <View style={{ flexDirection: "row" }} />
            {/* 
            <View style={styles.buttonContainer}>
              <Button title={this.state.word} color="#841584" />
            </View> */}
          </View>
          <View
            style={{
              flex: 3,
              backgroundColor: "steelblue",
              justifyContent: "center"
            }}
          >
            <View style={styles.test}>
              <SortableGrid
                blockTransitionDuration={400}
                activeBlockCenteringDuration={200}
                itemsPerRow={3}
                dragActivationTreshold={200}
                onDragRelease={itemOrder =>
                  console.log(
                    "Drag was released, the blocks are in the following order: ",
                    itemOrder
                  )
                }
                onDragStart={() =>
                  console.log("Some block is being dragged now!")
                }
              >
                {this.alphabets.map((letter, index) => (
                  <View
                    key={index}
                    style={[styles.block, { backgroundColor: this.getColor() }]}
                    onTap={event => this._onPressButton(event, letter)}
                  >
                    <Text adjustsFontSizeToFit>{letter}</Text>
                  </View>
                ))}
              </SortableGrid>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // justifyContent: "center",
    flex: 1,
    marginTop: 0
  },
  fullImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "98%",
    resizeMode: "contain"
  },
  modelStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  closeButtonStyle: {
    width: 25,
    height: 25,
    top: 9,
    right: 9,
    position: "absolute"
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 10
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  test: {
    marginLeft: 100,
    marginRight: 100
  },
  imageStyle: {
    flex: 3,
    alignSelf: "stretch",
    // width: 100,
    height: 100
  }
});
