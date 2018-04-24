import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }
    state = {
      email: '', password: '', error: '', loading: false,
    }
    onButtonPress() {
      const { email, password } = this.state;
      console.log(email, password);
      this.setState({ error: '', loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess, this.onLoginFail)
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess, this.onLoginFail);
        });
    }
    onLoginSuccess() {
      this.setState({
        email: '', password: '', loading: false, error: '',
      });
    }
    onLoginFail(error) {
      this.setState({ error: error.message, loading: false });
    }
    renderButton() {
      if (this.state.loading) {
        return <Spinner size="small" />;
      }
      return (
        <Button onPress={this.onButtonPress}>
          Log In
        </Button>);
    }
    render() {
      const { errorStyle } = styles;
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
          <Text style={errorStyle}>{this.state.error}</Text>
          <CardSection />
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      );
    }
}

export default LoginForm;
