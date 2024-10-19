import React from 'react';
import PatientInfo from './PatientInfo'
import './App.css';
import Form from './Form';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to our App!</h1>
      </header>
      <PatientInfo />
      <Form/>
    </div>
  );
}

export default App;
