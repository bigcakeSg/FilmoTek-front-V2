import { Link } from '@tanstack/react-router';
import { format } from 'date-fns';
import { MovieLite } from '@/interfaces/movies.interfaces';
import NoImg from '@assets/noMovie.jpg';
import { movieTile } from './movieTile.styles';
import MovieCollectionTools from './MovieCollectionTools';

type MovieTileProps = MovieLite;

export default function MovieTile(movie: Readonly<MovieTileProps>) {
  return (
    <Link key={movie._id} to="/movie/$movieId" params={{ movieId: movie._id }}>
      <div className={movieTile}>
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
          <MovieCollectionTools watched={false} />
          <div className="movie-release_date">
            {format(new Date(movie.releaseDate), 'yyyy')}
          </div>
        </div>
      </div>
    </Link>
  );
}
