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

  if (confidencePercentage < 25) {
    message = 'High risk: It is important to take immediate action. Please consult with a physician about immediate lifestyle changes.';
  } else if (confidencePercentage < 50) {
    message = 'Moderate risk: Consider making some changes to your health where you can, you are on track for Congestive Heart Failure';
  } else if (confidencePercentage < 75) {
    message = 'Low risk: While the risk is relatively low, failure to maintain healthy lifestyle could very well mean you end up with CHF';
  } else {
    message = 'Very low risk: Continue to live how you are, though stay mindful about your health.';
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
