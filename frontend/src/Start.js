import React from 'react';
import PatientInfo from './PatientInfo'
import './App.css';
import Form from './Form';
import Heart from './heart';
import './start.css'
function Start() {
  return (
      <div>
        <Heart/>
        <div className='formbox'>
          <PatientInfo />
          <Form/>
        </div>
      
        </div>
  );
}

export default Start;
