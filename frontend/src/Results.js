import React from 'react';
import ApexChart from './Piechart';
import NextSteps from './NextSteps'
function Results() {
    return (
      <div>
        <NextSteps/>
        <ApexChart/>
        <h1>Hello from MyComponent!</h1>
      </div>
    );
  }
  export default Results;