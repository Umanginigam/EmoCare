import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Mood Score",
        data: [3, 4, 2, 5],
        borderColor: "blue",
        fill: false, // This ensures the line isn't filled with color
        tension: 0.1 // Optional: adds smoothness to the curve of the line
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Mental Health Mood Score Over Time'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Weeks'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Mood Score'
        },
        min: 0, // Optional: Set minimum value for y-axis
        max: 5  // Optional: Set maximum value for y-axis
      }
    }
  };

  return (
    <div>
      <h2>Mental Health Reports</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Reports;
