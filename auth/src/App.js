import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LogginForm';

class App extends React.PureComponent {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbTSdH3Y6PYO_p9iPRvkg_ZHdA5M2sVaQ',
      authDomain: 'auth-ea6f3.firebaseapp.com',
      databaseURL: 'https://auth-ea6f3.firebaseio.com',
      projectId: 'auth-ea6f3',
      storageBucket: 'auth-ea6f3.appspot.com',
      messagingSenderId: '1036866791361',
    });

    firebase.auth().onAuthStateChanged(user => {
      if(user)
        this.setState({ loggedIn: true });
      else 
        this.setState({ loggedIn: false });
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button
          onPress={() => firebase.auth().signOut()}
        >Log Out</Button>
      case false:
        return <LoginForm />;;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }} >
        <Header>Auth</Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
