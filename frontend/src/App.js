import React from 'react';
import PatientInfo from './PatientInfo'
import './App.css';
import Form from './Form';
import ApexChart from './Piechart';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './Results';
import Start from './Start';
import { useRef } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Start />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
