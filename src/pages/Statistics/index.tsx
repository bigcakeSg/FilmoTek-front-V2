import GenreChart from './GenreChart';
import DateChart from './DateChart';
import SupportChart from './SupportChart';

export default function Statistics() {
  return (
    <div
      style={{
        overflow: 'auto',
        height: '100%'
      }}
    >
      <div
        style={{
          width: '1000px',
          margin: '0 auto'
        }}
      >
        <DateChart />
        <SupportChart />
        <GenreChart />
      </div>
    </div>
  );
}
