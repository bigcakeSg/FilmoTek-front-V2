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
import { useTranslation } from 'react-i18next';
import { useStatsByDate } from '@/hooks/stats.hook';
import Loader from '@/components/ui/Loader';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Release dates'
    },
    legend: {
      display: false
    }
  },
  responsive: true
};

export default function DateChart() {
  const { t } = useTranslation();
  const { data: dates, isFetching } = useStatsByDate();

  const count = [];
  const list = [];

  const dateKeys = Object.keys(dates);
  for (let i = +dateKeys[0]; i <= +dateKeys[dateKeys.length - 1]; i++) {
    count.push(dates[i] ? dates[i].total : 0);
    list.push(i);
  }

  const chartDate = {
    labels: list,
    datasets: [
      {
        data: count,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  };

  return (
    <div
      style={{
        height: '400px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isFetching ? (
        <Loader label={t('loading')} />
      ) : (
        <Bar options={options} data={chartDate} />
      )}
    </div>
  );
}
