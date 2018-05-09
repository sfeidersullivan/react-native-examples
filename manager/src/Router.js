import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Stack key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
        />
      </Stack>
      <Stack key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employee List"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Employee Create"
        />
      </Stack>
    </Stack>
  </Router>
);

export default RouterComponent;
