import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { Movie } from '@interfaces/movies.interfaces';
import useUiStore from '@stores/ui.store';
import { imageFrame, movieTilePanel } from './movieNamePanel.styles';

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

  return (
    <Link
      to="/movie/$movieId"
      params={{ movieId: movie._id }}
      onClick={closeRightPanel}
      className={movieTilePanel}
    >
      <div className={imageFrame}>
        <img
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
          <div className="role">
            {movie.casting
              .filter((cast) => cast.name._id === nameId)
              .map((cast) => t(`job.${cast.job}`))
              .join(', ')}
          </div>
          <div className="release-date">
            {format(new Date(movie.releaseDate), 'yyyy')}
          </div>
        </div>
      </div>
    </Link>
  );
}
