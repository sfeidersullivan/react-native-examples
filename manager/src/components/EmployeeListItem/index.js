import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardDetail } from '../common';
import styles from './styles';

const EmployeeListItem = (props) => {
  const { employee } = props;
  const { name } = employee;
  const onRowPress = () => Actions.employeeEdit({ employee });

  return (
    <TouchableWithoutFeedback
      onPress={onRowPress}
    >
      <View>
        <CardDetail style={styles.title}>
          <Text>{name}</Text>
        </CardDetail>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EmployeeListItem;
