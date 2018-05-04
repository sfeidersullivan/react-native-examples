import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

const Header = ({ title }) => (
  <View style={styles.view}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

export default Header;
