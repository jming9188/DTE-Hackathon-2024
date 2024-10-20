import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './piechart.css';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        this.props.value1,
        this.props.value2
      ],
      options: {
        chart: {
          type: 'donut',
        },
        labels: ['Chance you have of CHF within 10 years', 'Chance you do not have of CHF within 10 years'],
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

  componentDidUpdate(prevProps) {
    if (
      prevProps.value1 !== this.props.value1 ||
      prevProps.value2 !== this.props.value2 
    ) {
      this.setState({
        series: [
          this.props.value1,
          this.props.value2,
        ],
      });
    }
  }

  render() {
    return (
      <div className="chart-container">
        
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height={350}
          />
       
      </div>
    );
  }
}

export default ApexChart;
