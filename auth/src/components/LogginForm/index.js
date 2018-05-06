import React, { PureComponent } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardDetail, Input, Spinner } from '../common';
import styles from './style';

export default class LoginForm extends PureComponent {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ loading: true, error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Auth Failed.',
      loading: false,
    })
  }

  renderButton() {
    if(this.state.loading)
      return <Spinner size={'small'} />
    return (
      <Button
        onPress={this.onButtonPress.bind(this)}
      >Log in</Button>
    )
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <Card>
        <CardDetail>
          <Input
            label={'Email'}
            onChangeText={email => this.setState({ email })}
            value={email}
            placeholder={'user@gmail.com'}
          />
        </CardDetail>
        <CardDetail>
          <Input
            label={'Password'}
            onChangeText={password => this.setState({ password })}
            value={password}
            placeholder={'password'}
            secureTextEntry
          />
        </CardDetail>
        <Text style={styles.error}>{error}</Text>
        <CardDetail>
          {this.renderButton()}
        </CardDetail>
      </Card>
    );
  }
}
