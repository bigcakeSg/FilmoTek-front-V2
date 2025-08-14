import { useTranslation } from 'react-i18next';
import {
  castLabel,
  directorsWriters,
  extendedCast,
  nameStyle,
  principalCast
} from './movieDetailCast.styles';
import { Name } from '@/interfaces/movies.interfaces';
import CastName from './CastName';
import useUiStore from '@/stores/ui.store';

interface MovieDetailCastProps {
  directors: Name[];
  writers: Name[];
  casting: {
    principal: Name[];
    extended: Name[];
  };
  onSelectName: (name: Name | null) => void;
}

export default function MovieDetailCast({
  directors,
  writers,
  casting,
  onSelectName
}: Readonly<MovieDetailCastProps>) {
  const { t } = useTranslation();
  const { openRightPanel } = useUiStore();

  const handleSelectName = (name: Name | null) => {
    onSelectName(name);
    openRightPanel();
  };

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
              <span key={`director-${director.name._id}`}>
                <button
                  className={nameStyle}
                  onClick={() => handleSelectName(director)}
                >
                  {director.name.text}
                </button>
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
              <span key={`writer-${writer.name._id}`}>
                <button
                  className={nameStyle}
                  onClick={() => handleSelectName(writer)}
                >
                  {writer.name.text}
                </button>
                {index < writers.length - 1 ? ', ' : ''}
              </span>
            ))}
          </span>
        </div>
      </div>
      <div>
        <div className={principalCast}>
          {casting.principal.map((actor) => (
            <CastName
              key={actor.name.id}
              onSelectName={handleSelectName}
              actor={actor}
              type="principal"
            />
          ))}
        </div>
        <div className={extendedCast}>
          {casting.extended.map((actor) => (
            <CastName
              key={actor.name._id}
              onSelectName={handleSelectName}
              actor={actor}
              type="extended"
            />
          ))}
        </div>
      </div>
    </>
  );
}
