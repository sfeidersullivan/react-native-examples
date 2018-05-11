import _ from 'lodash';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardDetail, Button, Confirm } from '../common';
import { employeeUpdate, employeeSave, employeeDelete } from '../../actions/EmployeeActions';
import EmployeeForm from '../EmployeeForm';

class EmployeeEdit extends PureComponent {
  state = { showModal: false };

  componentWillMount() {
    console.log(this.props.employee)
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;
    const { uid } = this.props.employee;
    this.props.employeeSave({ name, phone, shift, uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onFirePress() {
    this.setState({ showModal: true });
  }

  onFireDeclinePress() {
    this.setState({ showModal: false });
  }

  onFireAcceptPress() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardDetail>
          <Button
            onPress={() => this.onSavePress()}
          >
            Save
          </Button>
        </CardDetail>
        <CardDetail>
          <Button
            onPress={() => this.onTextPress()}
          >
            Text Schedule
          </Button>
        </CardDetail>
        <CardDetail>
          <Button
            onPress={() => this.onFirePress()}
          >
            Fire Employee
          </Button>
        </CardDetail>
        <Confirm
          visible={this.state.showModal}
          onAccept={() => this.onFireAcceptPress()}
          onDecline={() => this.onFireDeclinePress()}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift,
});

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeDelete },
)(EmployeeEdit);
