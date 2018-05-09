import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardDetail, Input, Spinner } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import styles from './style';

class LoginForm extends PureComponent {
  onButtonPress() {
    const { email, password, loginUser } = this.props;
    loginUser({ email, password });
  }

  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  renderButton() {
    return this.props.loading ?
      <Spinner size="large" /> :
      <Button onPress={this.onButtonPress.bind(this)}>
        button
      </Button>;
  }

  renderError() {
    return this.props.error ?
      <View styles={{ backgroundColor: 'white' }}>
        <Text style={styles.errorText}>
          {this.props.error}
        </Text>
      </View> : undefined;
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardDetail>
          <Input
            label="Email"
            onChangeText={this.onEmailChange.bind(this)}
            value={email}
            placeholder="user@gmail.com"
          />
        </CardDetail>
        <CardDetail>
          <Input
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={password}
            placeholder="password"
            secureTextEntry
          />
        </CardDetail>
        {this.renderError()}
        <CardDetail>
          {this.renderButton()}
        </CardDetail>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser },
)(LoginForm);
