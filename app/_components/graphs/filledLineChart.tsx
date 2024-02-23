// pages/BarExample.js
'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
// import {Chart as ChartJS} from 'chart.js/auto'
import { Chart, PointElement, LineElement, LinearScale, CategoryScale, Filler, ChartData } from 'chart.js';

Chart.register(PointElement, LineElement, LinearScale, CategoryScale, Filler);

const data = {
    labels: ['Sept 15', 'Sept 17', 'Sept 19', 'Sept 21', 'Sept 23', 'Sept 25', 'Sept 27', 'Sept 29', 'Oct 1', 'Oct 3', 'Oct 5', 'Oct 7', 'Oct 9', 'Oct 11', 'Oct 13', 'Oct 13', 'Oct 13'],
    datasets: [
      {
        label: 'Filled',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(69, 146, 255,0.4)',
        borderColor: 'rgba(69, 146, 255,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(69, 146, 255,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(69, 146, 255,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.5, 0.7, 0.75, 0.7, 0.8, 0.9, 0.9, 0.8, 0.75, 0.6, 0.7, 0.75, 0.68, 0.55, 0.65, 0.75, 0.6]
      }
    ]
};

const options = {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 1,
        maxTicksLimit: 3,
      },
    },
  };

const FilledLineChart = () => {
  const data: ChartData<"line", number[], string> = {
    labels: ['Sept 15', 'Sept 17', 'Sept 19', 'Sept 21', 'Sept 23', 'Sept 25', 'Sept 27', 'Sept 29', 'Oct 1', 'Oct 3', 'Oct 5', 'Oct 7', 'Oct 9', 'Oct 11', 'Oct 13', 'Oct 13', 'Oct 13'],
    datasets: [
      {
        label: 'Filled',
        fill: true,
        // lineTension: 0.5,
        backgroundColor: 'rgba(69, 146, 255,0.4)',
        borderColor: 'rgba(69, 146, 255,1)',
        borderCapStyle: 'butt' as const,
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(69, 146, 255,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(69, 146, 255,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0.5, 0.7, 0.75, 0.7, 0.8, 0.9, 0.9, 0.8, 0.75, 0.6, 0.7, 0.75, 0.68, 0.55, 0.65, 0.75, 0.6]
      }
    ]
  };

  return (
    <div>
      {/* <h2>Line Example (custom size)</h2> */}
      <div className='w-full'>
        <Line
            data={data}
            options={options}
            // width={1000}
            // height={300}
        />
      </div>
    </div>
  );
};

export default FilledLineChart;
