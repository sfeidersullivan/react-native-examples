import React, { PureComponent } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardDetail, Input } from '../common';
import { employeeUpdate } from '../../actions/EmployeeActions';
import styles from './style';

class EmployeeForm extends PureComponent {
  render() {
    return (
      <View>
        <CardDetail>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardDetail>
        <CardDetail>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardDetail>
        <CardDetail style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerText}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardDetail>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
