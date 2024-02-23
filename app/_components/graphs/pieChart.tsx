// pages/BarExample.js
'use client'
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { Chart, PointElement, LineElement, LinearScale, CategoryScale, Filler, ArcElement } from 'chart.js';

Chart.register(PointElement, LineElement, LinearScale, CategoryScale, Filler, ArcElement);

const data = {
    labels: [
		'Blue',
		'LightBlue'
	],
	datasets: [{
		data: [80, 20],
		backgroundColor: [
		'#264ECA',
		'#A3B3E5'
		],
		hoverBackgroundColor: [
		'#264ECA',
		'#A3B3E5'
		]
	}]
};

const PieChart = () => {
  return (
    <div>
      <div className='w-32'>
      <Pie
        data={data}
        width={10}
        height={10}
      />
      </div>
    </div>
  );
};

export default PieChart;
