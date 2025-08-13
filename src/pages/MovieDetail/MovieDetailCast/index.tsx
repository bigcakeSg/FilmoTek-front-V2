import { useTranslation } from 'react-i18next';
import {
  castLabel,
  directorsWriters,
  extendedCast,
  principalCast
} from './movieDetailCast.styles';
import { Name } from '@/interfaces/movies.interfaces';
import CastName from './CastName';

interface MovieDetailCastProps {
  directors: Name[];
  writers: Name[];
  casting: {
    principal: Name[];
    extended: Name[];
  };
}

export default function MovieDetailCast({
  directors,
  writers,
  casting
}: Readonly<MovieDetailCastProps>) {
  const { t } = useTranslation();

  return (
    <>
      <div className={directorsWriters}>
        <div>
          <span className={castLabel}>
            {directors.length > 1
              ? t('movieDetail.directors')
              : t('movieDetail.director')}
          </span>{' '}
          <span>
            {directors.map((director, index) => (
              <span key={`director-${director.name.id}`}>
                <button>{director.name.text}</button>
                {index < directors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        </div>
        <div>
          <span className={castLabel}>
            {writers.length > 1
              ? t('movieDetail.writers')
              : t('movieDetail.writer')}
          </span>{' '}
          <span>
            {writers.map((writer, index) => (
              <span key={`writer-${writer.name.id}`}>
                <button>{writer.name.text}</button>
                {index < writers.length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div>
        <div className={principalCast}>
          {casting.principal.map((actor) => (
            <CastName key={actor.name.id} actor={actor} type="principal" />
          ))}
        </div>
        <div className={extendedCast}>
          {casting.extended.map((actor) => (
            <CastName key={actor.name.id} actor={actor} type="extended" />
          ))}
        </div>
      </div>
    </>
  );
}
