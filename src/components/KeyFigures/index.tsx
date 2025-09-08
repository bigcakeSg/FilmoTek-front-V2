import {
  useStatsByDate,
  useStatsByGenre,
  useStatsBySupport,
  useStatsDuration
} from '@/hooks/stats.hook';
import { keyFigureBox, keyFiguresContainer } from './keyFigures.styles';
import Loader from '../ui/Loader';
import { Supports, SupportsEnum } from '@/interfaces/movies.interfaces';

export default function KeyFigures() {
  const { data: dates, isFetching: dateFetching } = useStatsByDate();
  const { data: support, isFetching: supportFetching } = useStatsBySupport();
  const { data: genres, isFetching: genreFetching } = useStatsByGenre();
  const { data: duration, isFetching: durationFetching } = useStatsDuration();

  const bestYear = dates
    ? Object.keys(dates).sort((a, b) => {
        return dates[+b].total - dates[+a].total;
      })[0]
    : 0;

  const durationDays = duration ? Math.floor(duration / 1440) : 0;
  const durationHours = duration ? Math.floor((duration % 1440) / 60) : 0;
  const durationMinutes = duration ? duration % 60 : 0;

  const bestSupport: Supports = support
    ? Object.keys(support).sort((a, b) => {
        return support[b] - support[a];
      })[0]
    : 'N/A';

  const bestGenre = genres
    ? Object.keys(genres).sort((a, b) => {
        return genres[b] - genres[a];
      })[0]
    : 'N/A';

  return (
    <div className={keyFiguresContainer}>
      {dateFetching ? (
        <Loader />
      ) : (
        <div className={keyFigureBox}>
          <div className="box-label">Année la plus représentée</div>
          <div className="box-value">{bestYear}</div>
          <div className="box-second-value">
            {dates?.[+bestYear]?.total} films
          </div>
        </div>
      )}
      {durationFetching ? (
        <Loader />
      ) : (
        <div className={keyFigureBox}>
          <div className="box-value">
            {durationDays}
            <span> jours</span> {durationHours} <span>heures</span>{' '}
            {durationMinutes} <span>minutes</span>
          </div>
          <div className="box-label">de visionnage</div>
        </div>
      )}
      {genreFetching ? (
        <Loader />
      ) : (
        <div className={keyFigureBox}>
          <div className="box-label">Genre préféré</div>
          <div className="box-value">{bestGenre}</div>
          <div className="box-second-value">{genres[bestGenre]} films</div>
        </div>
      )}
      {supportFetching ? (
        <Loader />
      ) : (
        <div className={keyFigureBox}>
          <div className="box-label">Support de prédilection</div>
          <div className="box-value">
            {SupportsEnum[bestSupport as keyof typeof SupportsEnum]}
          </div>
          <div className="box-second-value">{support[bestSupport]} films</div>
        </div>
      )}
    </div>
  );
}
