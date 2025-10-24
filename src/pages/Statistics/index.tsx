import GenreChart from '@components/Charts/GenreChart';
import DateChart from '@components/Charts/DateChart';
import SupportChart from '@components/Charts/SupportChart';
import KeyFigures from '@components/KeyFigures';
import { statsContainer, statsContent } from './statistics.styles';

export default function Statistics() {
  return (
    <div className={statsContainer}>
      <div className={statsContent}>
        <KeyFigures />
        <DateChart />
        <SupportChart />
        <GenreChart />
      </div>
    </div>
  );
}
