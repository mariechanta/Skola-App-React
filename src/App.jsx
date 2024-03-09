import React from 'react';
import StudentList from './StudentList';
import DataFetchingComponent from './Api';
import StyledComponent from './Styled';
import UseReducerComponent from './UseReducer';

const App = () => {
  return (
    <div>
      <h1>School Web Interaction</h1>
      <StudentList />
      <DataFetchingComponent />
      <StyledComponent />
      <UseReducerComponent />
      {/* Här kommer lägga mer component */}
    </div>
  );
};
