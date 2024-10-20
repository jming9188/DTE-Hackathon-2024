import React from 'react';
import ApexChart from './Piechart';
import NextSteps from './NextSteps';
import { useLocation } from 'react-router-dom';
import './result.css';

function Results() {
  const location = useLocation();
  const { prediction, confidence } = location.state || {};

  const confidencePercentage = confidence * 100;
  const riskPercentage = 100 - confidencePercentage;

  let message = '';

  if (confidencePercentage > 75) {
    message = 'High risk: It is important to take immediate action. Consult with your healthcare provider for a detailed treatment plan.';
  } else if (confidencePercentage > 50) {
    message = 'Moderate risk: You should consider making lifestyle changes and scheduling a medical check-up to address potential risks.';
  } else if (confidencePercentage > 25) {
    message = 'Low risk: While the risk is relatively low, maintaining a healthy lifestyle is important to prevent future problems.';
  } else {
    message = 'Very low risk: Continue your current lifestyle, but stay mindful of potential risks and monitor your health.';
  }

  return (
    <div className='result'>
      <h1>{riskPercentage}% Chances of CHF in the next 10 years</h1>
      
      <ApexChart value1={riskPercentage} value2={confidencePercentage} />
      
      
      <div className='message-box'>
        <h2>Risk Assessment</h2>
        <p>{message}</p>
      </div>

      <NextSteps />
    </div>
  );
}

export default Results;
