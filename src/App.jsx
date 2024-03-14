// src/App.js
import React from "react";
import ReactDom from "react -dom/client";
import App from "./App";
import StudentList from "./StudentList";
import Button from "./Button";
import Counter from "./Counter";
import "./index.css";

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
