import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

const Input = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>
      {label}
    </Text>
    <TextInput
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  </View>
);

export { Input };
