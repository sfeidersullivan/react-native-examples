import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common/Header';
import RouterComponent from './Router';

type Props = {};
class App extends PureComponent<Props> {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyA5gsXZP_1rVtvjrhpGngBVj_V-cdHNI8U',
      authDomain: 'manager-32326.firebaseapp.com',
      databaseURL: 'https://manager-32326.firebaseio.com',
      projectId: 'manager-32326',
      storageBucket: 'manager-32326.appspot.com',
      messagingSenderId: '34530702769'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider
        store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
      >
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </Provider>
    );
  }
}

export default App;
