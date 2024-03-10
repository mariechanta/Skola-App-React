
import React from 'react';
import StudentList from './Components/StudentList';
import DataFetchingComponent from './Components/DataFetchingComponent';
import StyledComponent from './Components/StyledComponent';
import UseReducerComponent from './Components/UseReducerComponent';

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
