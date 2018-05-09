import React from 'react';
import { View } from 'react-native';
import styles from './style';

const CardDetail = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

export { CardDetail };
