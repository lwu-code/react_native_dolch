import React from "react";
import AppNavigator from "./screens/AppNavigator";
import { Provider } from "mobx-react";
import GameStore from "./stores/GameStore";
import Vocabulary from "./lib/Vocabulary";
import AI from "./lib/AI";

const DEFAULT_VOCABULARY = require("./data/2011freq.json");
const vocabulary = new Vocabulary();
vocabulary.loadWordsData(DEFAULT_VOCABULARY);

GameStore.vocabulary = vocabulary;
GameStore.ai = new AI(vocabulary);

export default class App extends React.Component {
  render() {
    return (
      <Provider GameStore={GameStore}>
        <AppNavigator />
      </Provider>
    );
  }
}
// import React, { Component } from "react";
// import { StyleSheet, View, Text, PanResponder, Animated } from "react-native";
// // import console = require("console");

// class Draggable extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showDraggable: true,
//       dropAreaValues: null,
//       pan: new Animated.ValueXY(),
//       opacity: new Animated.Value(1)
//     };
//   }

//   componentWillMount() {
//     this._val = { x: 0, y: 0 };
//     this.state.pan.addListener(value => (this._val = value));

//     this.panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: (e, gesture) => true,
//       onPanResponderGrant: (e, gesture) => {
//         this.state.pan.setOffset({
//           x: this._val.x,
//           y: this._val.y
//         });
//         this.state.pan.setValue({ x: 0, y: 0 });
//       },
//       onPanResponderMove: Animated.event([
//         null,
//         { dx: this.state.pan.x, dy: this.state.pan.y }
//       ]),
//       onPanResponderRelease: (e, gesture) => {
//         if (this.isDropArea(gesture)) {
//           Animated.timing(this.state.opacity, {
//             toValue: 0,
//             duration: 1000
//           }).start(() =>
//             this.setState({
//               showDraggable: false
//             })
//           );
//         }
//       }
//     });
//   }

//   isDropArea(gesture) {
//     console.log("gesture.moveX = ", gesture.moveX);
//     console.log("gesture.moveY = ", gesture.moveY);
//     return gesture.moveY < 200;
//   }

//   render() {
//     return (
//       <View style={{ width: "20%", alignItems: "center" }}>
//         {this.renderDraggable()}
//       </View>
//     );
//   }

//   renderDraggable() {
//     const panStyle = {
//       transform: this.state.pan.getTranslateTransform()
//     };
//     if (this.state.showDraggable) {
//       return (
//         <View style={{ position: "absolute" }}>
//           <Animated.View
//             {...this.panResponder.panHandlers}
//             style={[panStyle, styles.circle, { opacity: this.state.opacity }]}
//           >
//             <Text style={styles.text}>A</Text>
//           </Animated.View>
//         </View>
//       );
//     }
//   }
// }

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.mainContainer}>
//         <View style={styles.dropZone}>
//           <Text style={styles.text}>Drop them here!</Text>
//         </View>
//         <View style={styles.ballContainer} />
//         <View style={styles.row}>
//           <Draggable />
//           <Draggable />
//           <Draggable />
//           <Draggable />
//           <Draggable />
//         </View>
//       </View>
//     );
//   }
// }

// let CIRCLE_RADIUS = 30;
// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1
//   },
//   ballContainer: {
//     height: 200
//   },
//   circle: {
//     backgroundColor: "skyblue",
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     borderRadius: CIRCLE_RADIUS
//   },
//   row: {
//     flexDirection: "row"
//   },
//   dropZone: {
//     height: 200,
//     backgroundColor: "#00334d"
//   },
//   text: {
//     marginTop: 25,
//     marginLeft: 5,
//     marginRight: 5,
//     textAlign: "center",
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "bold"
//   }
// });
