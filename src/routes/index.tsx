import { createFileRoute, Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import z from 'zod';
import { useMovies } from '../hooks/movies.hooks';

const moviesSearchSchema = z.object({
  page: z.number().optional()
});

// const movieListQuery = (page?: number) => ({
//   queryKey: ['movieList', page],
//   queryFn: async () => {
//     // throw new MovieNotFoundError(`Movie with id "${movieId}" not found!`);
//     console.log('FETCH MOVIE LIST', page);
//     return [
//       { id: '1', title: `Movie Title 1 - Page ${page || 1}` },
//       { id: '2', title: `Movie Title 2 - Page ${page || 1}` }
//     ];
//   }
// });

export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: (search) => moviesSearchSchema.parse(search)
  // errorComponent: MovieErrorComponent,
});

function Index() {
  const moviesQuery = useMovies();
  const { page = 1 } = Route.useSearch();
  const { t } = useTranslation();
  console.log(moviesQuery);
  return (
    <div>
      <h3>
        {t('movieList')} - page {page}
      </h3>
      {moviesQuery.data.map((movie) => (
        <div key={movie._id}>{movie.originalTitle}</div>
      ))}
      <Link to="/" search={{ page: page + 1 }}>
        Next
      </Link>
    </div>
  );
}
