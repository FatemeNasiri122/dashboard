import Menu from "../ui/icons/Menu";
import CheckCircle from "../ui/icons/CheckCircle";
import TrendingDown from "../ui/icons/TrendingDown";
import TrendingUp from "../ui/icons/TrendingUp";

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },

  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,20,30,40,80,46,89],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

const TasksPerformance: React.FC = () => {


    return (<div className="performance-container">
        <div className="projects-container">
            <p className="active-title">Tasks Performance</p>
            <Menu />
      </div>
        <Bar options={options} data={data} height="300px"/>
        <div className="performance-info-container">
            <div className="performance-info">
                <CheckCircle />
                <span className="performance-percentage">76%</span>
                <span className="performance-status">Completed</span>
            </div>
            <div className="performance-info">
                <TrendingUp />
                <span className="performance-percentage">32%</span>
                <span className="performance-status">In-Progress</span>
            </div>
            <div className="performance-info">
                <TrendingDown />
                <span className="performance-percentage">13%</span>
                <span className="performance-status">Behind</span>
            </div>
        </div>
        
    </div>)
}

export default TasksPerformance;