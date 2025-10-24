import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { useStatsBySupport } from '@/hooks/stats.hook';
import Loader from '@/components/ui/Loader';
import useColorModeStore from '@stores/colorMode.store';

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
  const { colorMode } = useColorModeStore();

  // TODO: palette light/dark
  const colors =
    colorMode === 'dark'
      ? [
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
      : [
          'rgba(153, 0, 79, 0.7)',
          'rgba(99, 153, 0, 0.7)',
          'rgba(179, 93, 2, 0.7)',
          'rgba(0, 153, 97, 0.7)',
          'rgba(102, 0, 153, 0.7)',
          'rgba(0, 102, 153, 0.7)',
          'rgba(0, 153, 13, 0.7)',
          'rgba(153, 128, 0, 0.7)',
          'rgba(153, 25, 0, 0.7)',
          'rgba(0, 3, 153, 0.7)'
        ];

  const chartSupport = {
    labels: ['VHS', 'Laserdisc', 'DVD', 'Blu-Ray', '4k UHD'],
    datasets: [
      {
        data: [support.vhs, support.ld, support.dvd, support.bd, support.uhd],
        borderWidth: 0,
        backgroundColor: colors
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
      COLOR: {colorMode}
      {isFetching ? (
        <Loader label={t('loading')} />
      ) : (
        <Doughnut options={options} data={chartSupport} />
      )}
    </div>
  );
}
