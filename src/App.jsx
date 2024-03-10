
import React from 'react';
import StudentList from './StudentList';
import DataFetchingComponent from './Api';
import StyledComponent from './Styled';
import UseReducerComponent from './UseReducer';

const App = () => {
  return (
    <div>
      <h1>School Web for students' collaboration</h1>
      <StudentList />
      <DataFetchingComponent />
      <StyledComponent />
      <UseReducerComponent />
      {/* I will need to add more components */}
    </div>
  );
};

export default App;
