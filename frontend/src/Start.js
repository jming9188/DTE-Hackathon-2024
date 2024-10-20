import React from 'react';
import PatientInfo from './PatientInfo'
import './App.css';
import Form from './Form';
import Heart from './heart';

function Start() {
  return (
      <div>
        <Heart/>
        <PatientInfo />
        <Form/>
      
        </div>
  );
}

export default Start;
