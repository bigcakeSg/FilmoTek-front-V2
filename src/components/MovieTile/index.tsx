import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { MovieLite } from '@/interfaces/movies.interfaces';
import NoImg from '@assets/noMovie.jpg';
import { movieTile } from './movieTile.styles';
import MovieCollectionTools from './MovieCollectionTools';

interface MovieTileProps extends MovieLite {
  watched?: boolean;
  favorite?: boolean;
  pinned?: boolean;
}

export default function MovieTile(movie: Readonly<MovieTileProps>) {
  return (
    <Link
      key={movie._id}
      to="/movie/$movieId"
      params={{ movieId: movie._id }}
      className={movieTile}
    >
      <div className="movie-container">
        <div
          className="movie-picture"
          style={{
            backgroundImage: `url(${NoImg})`
          }}
        ></div>
        <div
          className="movie-picture"
          style={{
            backgroundImage: `url(http://localhost:5000/media/posters/${movie.picture})`
          }}
        ></div>
        <div className="movie-overlay"></div>
        <div className="movie-infos">
          <div>
            <div className="movie-original_title">{movie.originalTitle}</div>
            <div className="movie-french_title">
              {movie.originalTitle !== movie.frenchTitle
                ? movie.frenchTitle
                : null}
            </div>
          </div>
          <MovieCollectionTools
            watched={movie.watched}
            favorite={movie.favorite}
            pinned={movie.pinned}
          />
          <div className="movie-release_date">
            {format(new Date(movie.releaseDate), 'yyyy')}
          </div>
        </div>
      </div>
    </Link>
  );
}
