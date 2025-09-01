import { format } from 'date-fns';
import { MovieLite } from '@interfaces/movies.interfaces';
import Skeleton from '../Skeleton';
import MovieCollectionTools from '../MovieCollectionTools';
import { frenchTitle, originalTitle, releaseDate, tile } from './tile.styles';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

interface TileProps {
  movie: MovieLite & {
    watched?: boolean;
    favorite?: boolean;
    pinned?: boolean;
  };
}

export default function Tile({ movie }: Readonly<TileProps>) {
  return (
    <div className={tile}>
      <Skeleton />
      <div
        className="movie-picture"
        style={{
          backgroundImage: `url(${BASE_URL}/media/posters/thumbnails/${movie.picture})`
        }}
      ></div>
      <div className="movie-overlay"></div>
      <div className="movie-infos">
        <div>
          <div className={originalTitle}>{movie.originalTitle}</div>
          <div className={frenchTitle}>
            {movie.originalTitle.toLowerCase() !==
            movie.frenchTitle?.toLowerCase()
              ? movie.frenchTitle
              : null}
          </div>
        </div>
        <MovieCollectionTools
          movieId={movie._id}
          watched={movie.watched}
          favorite={movie.favorite}
          pinned={movie.pinned}
        />
        <div className={releaseDate}>
          {format(new Date(movie.releaseDate), 'yyyy')}
        </div>
      </div>
    </div>
  );
}
