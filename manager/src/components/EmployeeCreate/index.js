import React, { PureComponent } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardDetail, Input, Button } from '../common';
import { employeeUpdate, employeeCreate } from '../../actions/EmployeeActions';
import EmployeeForm from '../EmployeeForm';

class EmployeeCreate extends PureComponent {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardDetail>
          <Button
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
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
