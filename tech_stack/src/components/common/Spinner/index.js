import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

const Spinner = ({ size }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

export { Spinner };
