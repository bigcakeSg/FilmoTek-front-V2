import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import z from 'zod';

const moviesSearchSchema = z.object({
  page: z.number().optional()
});

const movieListQuery = (page?: number) => ({
  queryKey: ['movieList', page],
  queryFn: async () => {
    // throw new MovieNotFoundError(`Movie with id "${movieId}" not found!`);
    console.log('FETCH MOVIE LIST', page);
    return [
      { id: '1', title: `Movie Title 1 - Page ${page || 1}` },
      { id: '2', title: `Movie Title 2 - Page ${page || 1}` }
    ];
  }
});

export const Route = createFileRoute('/')({
  component: Index,
  validateSearch: (search) => moviesSearchSchema.parse(search)
  // errorComponent: MovieErrorComponent,
});

function Index() {
  const { page = 1 } = Route.useSearch();
  const { data } = useSuspenseQuery(movieListQuery(page));

  return (
    <div>
      <h3>Movie list - page {page}</h3>
      {data.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
      <Link to="/" search={{ page: page + 1 }}>
        Next
      </Link>
    </div>
  );
}
