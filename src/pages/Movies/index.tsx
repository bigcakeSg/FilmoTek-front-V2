import { useMovies } from '@/hooks/movies.hooks';
import { Route } from '@/routes';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

export default function Movies() {
  const moviesQuery = useMovies();
  const { page = 1 } = Route.useSearch();
  const { t } = useTranslation();

  return (
    <div>
      <h3>
        {t('movieList')} - page {page}
      </h3>
      <Link to="/" search={{ page: page + 1 }}>
        Next
      </Link>
      <div>
        {moviesQuery.data.map((movie) => (
          <div key={movie._id}>{movie.originalTitle}</div>
        ))}
      </div>
    </div>
  );
}
