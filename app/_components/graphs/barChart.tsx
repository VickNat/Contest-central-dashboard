'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Filler } from 'chart.js'; 
Chart.register(CategoryScale, LinearScale, BarElement, Filler);

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [{
    label: '# of Votes',
    data: [78, 95, 35, 65, 55, 19, 66],
    backgroundColor: 'rgba(38, 78, 202, 1)',
    barThickness: 10,
    fill: false,
  }]
};

const BarChart = () => {
  return (
    <div>
      <div className='w-52 h-60'>
        <Bar
          data={data}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default BarChart;