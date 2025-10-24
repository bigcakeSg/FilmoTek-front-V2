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
import { useStatsByGenre } from '@/hooks/stats.hook';
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
      text: 'Genres'
    },
    legend: {
      display: false
    }
  },
  responsive: true
};

export default function GenreChart() {
  const { t } = useTranslation();
  const { data: genres, isFetching } = useStatsByGenre();

  const chartGenre = {
    labels: Object.keys(genres),
    datasets: [
      {
        data: Object.values(genres),
        backgroundColor: [
          'rgba(0, 3, 153, 0.7)',
          'rgba(153, 0, 79, 0.7)',
          'rgba(99, 153, 0, 0.7)',
          'rgba(179, 93, 2, 0.7)',
          'rgba(0, 153, 97, 0.7)',
          'rgba(102, 0, 153, 0.7)',
          'rgba(0, 102, 153, 0.7)',
          'rgba(0, 153, 13, 0.7)',
          'rgba(153, 128, 0, 0.7)',
          'rgba(153, 25, 0, 0.7)'
        ]
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
        <Bar options={options} data={chartGenre} />
      )}
    </div>
  );
}
