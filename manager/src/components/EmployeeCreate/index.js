import React, { PureComponent } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardDetail, Input, Button } from '../common';
import { employeeUpdate, employeeCreate } from '../../actions/EmployeeActions';
import styles from './style';

class EmployeeCreate extends PureComponent {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <CardDetail>
          <Input
            label="Name"
            placeholder="Jane"
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardDetail>
        <CardDetail>
          <Input
            label="Phone"
            placeholder="555-555-5555"
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
        <CardDetail>
          <Button
            label="Phone"
            placeholder="Jane"
            onPress={() => this.onButtonPress()}
          >
            Create
          </Button>
        </CardDetail>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employee.name,
  phone: state.employee.phone,
  shift: state.employee.shift,
});

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
