import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useStatsBySupport } from '@/hooks/stats.hook';
import Loader from '@/components/ui/Loader';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Supports'
    }
  },
  responsive: true
};

export default function SupportChart() {
  const { t } = useTranslation();
  const { data: support, isFetching } = useStatsBySupport();

  const chartSupport = {
    labels: ['VHS', 'Laserdisc', 'DVD', 'Blu-Ray', '4k UHD'],
    datasets: [
      {
        data: [support.vhs, support.ld, support.dvd, support.bd, support.uhd],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(66, 137, 8, 0.5)',
          'rgba(201, 207, 21, 0.5)',
          'rgba(40, 77, 158, 0.5)',
          'rgba(244, 21, 40, 0.5)'
        ]
      }
    ]
  };

  return (
    <div
      style={{
        height: '600px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isFetching ? (
        <Loader label={t('loading')} />
      ) : (
        <Doughnut options={options} data={chartSupport} />
      )}
    </div>
  );
}
