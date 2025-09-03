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
        label: 'Movies',
        data: Object.values(genres),
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
        <Bar options={options} data={chartGenre} />
      )}
    </div>
  );
}
