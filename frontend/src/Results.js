import React from 'react';
import ApexChart from './Piechart';
import NextSteps from './NextSteps';

function Results() {
    return (
      <div>
        <NextSteps/>
        <ApexChart value1={50} value2={50}/>
      </div>
    );
  }
  export default Results;