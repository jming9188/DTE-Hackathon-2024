import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={350}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;


const domContainer = document.querySelector('#app');

