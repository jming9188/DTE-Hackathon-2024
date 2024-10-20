import React from 'react';
import ApexChart from './Piechart';
import NextSteps from './NextSteps';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { prediction, confidence } = location.state || {};

  return (
    <div>
      <p>Prediction: {prediction}</p>
      <p>Confidence: {confidence}</p>
      <NextSteps/>
      <ApexChart value1={confidence*100} value2={100 - confidence*100}/>
    </div>
  );
}

export default Results;