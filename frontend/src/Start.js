import React from 'react';
import PatientInfo from './PatientInfo'
import './App.css';
import Form from './Form';
import Heart from './heart';

function Start() {
  return (
      <div>
        <h1>Welcome to our App!</h1>
        <Heart/>
        <PatientInfo />
        <Form/>
      
        </div>
  );
}

export default Start;
