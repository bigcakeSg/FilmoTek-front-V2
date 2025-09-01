import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1253, 518, 874, 1234, 999, 456, 789],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'Dataset 2',
      data: [234, 678, 123, 456, 789, 101, 112],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};

export default function Statistics() {
  return (
    <>
      <h1>Statistics</h1>
      <div style={{ width: '800px', height: '400px' }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
