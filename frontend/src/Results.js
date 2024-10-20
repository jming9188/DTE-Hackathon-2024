import React from 'react';
import ApexChart from './Piechart';
import NextSteps from './NextSteps';
import { useLocation } from 'react-router-dom';
import './result.css'
function Results() {
  const location = useLocation();
  const { prediction, confidence } = location.state || {};

  return (
    <div className='result'>
      <h1>{confidence*100}% chance you will have CHF withn 10 years </h1>
      <ApexChart value1={confidence*100} value2={100 - confidence*100}/>
      <NextSteps/>
    </div>
  );
}

export default Results;