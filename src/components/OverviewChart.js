import React, { useState } from 'react';
import './OverviewChart.css';
import { Bar } from 'react-chartjs-2';
import { FaDownload } from 'react-icons/fa';
import 'chart.js/auto';

const OverviewChart = () => {
  const [activeTab, setActiveTab] = useState('Yearly');

  // Sample data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Amount',
        data: [800, 400, 1200, 1500, 900, 1100, 500, 1300, 700, 1000, 200, 600],
        backgroundColor: '#b392f0',
        borderRadius: 3,
        barThickness: 26,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 500,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="overview-container">
      <div className="overview-header">
        <h3>overview</h3>
        <a href="#" className="download-link">
          <FaDownload />
          <span>Download Report</span>
        </a>
      </div>

      <div className="overview-tabs">
        <button
          className={activeTab === 'Monthly' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('Monthly')}
        >
          Monthly
        </button>
        <button
          className={activeTab === 'Yearly' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('Yearly')}
        >
          Yearly
        </button>
      </div>

      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default OverviewChart;
