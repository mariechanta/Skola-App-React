// src/App.js
import React from 'react';
import StudentList from './components/StudentList';
import Button from './components/Button';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <h1>Students Collaboration App</h1>
      <StudentList />
      <Button onClick={() => console.log('Button clicked')}>Click me</Button>
      <Counter />
    </div>
  );
};

export default App;
