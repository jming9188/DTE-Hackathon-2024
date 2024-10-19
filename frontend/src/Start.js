import React from 'react';
import PatientInfo from './PatientInfo'
import './App.css';
import Form from './Form';
import ApexChart from './Piechart';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './Results';

function Start() {
  return (
      <div>
        <h1>Welcome to our App!</h1>
       
        <PatientInfo />
        <Form/>
      
        </div>
  );
}

export default Start;
