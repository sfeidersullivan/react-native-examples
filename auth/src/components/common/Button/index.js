import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

const Button = ({ onPress, children }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={onPress}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

export { Button };
