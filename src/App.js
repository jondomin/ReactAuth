import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import config from './config';

class App extends Component {
  state = { loggedIn: null };
  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View flexDirection="row">
            <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View flexDirection="row">
            <Spinner size="large" />
          </View>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
