import { Link } from '@tanstack/react-router';
import { MovieLite } from '@/interfaces/movies.interfaces';
import { movieTile } from './movieTile.styles';
import Tile from './Tile';
import Skeleton from './Skeleton';

interface MovieTileProps {
  movie?: MovieLite & {
    watched?: boolean;
    favorite?: boolean;
    pinned?: boolean;
  };
  isFetching: boolean;
}

export default function MovieTile({
  movie,
  isFetching
}: Readonly<MovieTileProps>) {
  if (isFetching)
    return (
      <div className={movieTile}>
        <div>
          <Skeleton />
        </div>
      </div>
    );

  if (movie)
    return (
      <Link to="/movie/$movieId" params={{ movieId: movie._id }}>
        <div className={movieTile}>
          <Tile movie={movie} />
        </div>
      </Link>
    );
}
