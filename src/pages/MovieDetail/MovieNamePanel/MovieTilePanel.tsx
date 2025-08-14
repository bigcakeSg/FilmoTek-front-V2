import { format } from 'date-fns';
import { Movie } from '@/interfaces/movies.interfaces';
import useUiStore from '@/stores/ui.store';
import { Link } from '@tanstack/react-router';
import { imageFrame, movieTilePanel } from './movieNamePanel.styles';
import { useTranslation } from 'react-i18next';
import { capitalizeFirstLetter } from '@/utils/helpers';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

interface MovieTilePanelProps {
  movie: Movie;
  nameId?: string;
}

export default function MovieTilePanel({
  movie,
  nameId
}: Readonly<MovieTilePanelProps>) {
  const { t } = useTranslation();
  const { closeRightPanel } = useUiStore();

  const roles = [];
  if (movie?.directors.some((director) => director.name._id === nameId))
    roles.push(t('role.director').toLowerCase());
  if (movie?.writers.some((writer) => writer.name._id === nameId))
    roles.push(t('role.writer').toLowerCase());
  if (
    movie?.casting.principal.some((actor) => actor.name._id === nameId) ||
    movie?.casting.extended.some((actor) => actor.name._id === nameId)
  )
    roles.push(t('role.actor').toLowerCase());

  return (
    <Link
      to="/movie/$movieId"
      params={{ movieId: movie._id }}
      onClick={closeRightPanel}
      className={movieTilePanel}
    >
      <div className={imageFrame}>
        <img
          width="100px"
          src={`${BASE_URL}/media/posters/thumbnails/${movie.picture}`}
          alt={movie.originalTitle}
        />
      </div>
      <div className="movie-detail">
        <div>
          <div className="original-title">{movie.originalTitle}</div>
          {movie.originalTitle !== movie.frenchTitle && (
            <div className="french-title">{movie.frenchTitle}</div>
          )}
        </div>
        <div>
          <div className="role">{capitalizeFirstLetter(roles.join(', '))}</div>
          <div className="release-date">
            {format(new Date(movie.releaseDate), 'yyyy')}
          </div>
        </div>
      </div>
    </Link>
  );
}
