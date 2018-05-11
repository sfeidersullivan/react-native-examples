import _ from 'lodash';
import React, { PureComponent } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../../actions/EmployeeActions';
import EmployeeListItem from '../EmployeeListItem';

class EmployeeList extends PureComponent {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  render() {
    const renderRow = employee => (<EmployeeListItem employee={employee} />);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={renderRow}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (value, key) => (
    { ...value, uid: key }
  ));
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
