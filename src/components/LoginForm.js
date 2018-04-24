import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
  }
    state = { email: '', password: '' }
    onButtonPress() {
      console.log(`email ${this.state.email}`);
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    }
    render() {
      return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@gmail.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              placeholder="********"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Button onPress={this.onButtonPress}>Log In</Button>
          </CardSection>
        </Card>
      );
    }
}

export default LoginForm;
