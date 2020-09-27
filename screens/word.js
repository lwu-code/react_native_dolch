class WordScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };
  render() {
    return <Button title="Login" onPress={() => this.checkLogin()} />;
  }

  checkLogin = () => {
    const { navigate } = this.props.navigation;
    if (username == "user" && password == "pass") {
      navigate("PrekScreen");
    }
  };
}
