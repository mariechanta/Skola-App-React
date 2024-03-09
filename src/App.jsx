import React from 'react';
import App from './App';
import StudentList from './Component/ StudentList';
import DataFetchingComponent from './Api';
import StyledComponent from './Styled';
import UseReducerComponent from './UseReducer';

const StudentApp = () => {
  return (
    <div>
      <h1>School Web for students collaboration</h1>
      <StudentList />
      <DataFetchingComponent />
      <StyledComponent />
      <UseReducerComponent />

    </div>
  );
};

export default StudentApp;
