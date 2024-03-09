// src/App.js
import React from 'react';
import StudentList from './components/StudentList';
import DataFetchingComponent from './components/DataFetchingComponent';
import StyledComponent from './components/StyledComponent';
import UseReducerComponent from './components/UseReducerComponent';

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
