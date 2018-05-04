import React from 'react';
import { View } from 'react-native';
import style from './style';

const Card = ({ children }) => (
  <View style={style.container}>
    {children}
  </View>
);

export default Card;
