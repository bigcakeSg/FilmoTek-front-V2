import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export class MovieNotFoundError extends Error {}

const movieQuery = (movieId: string) => ({
  queryKey: ['movie', movieId],
  queryFn: async () => {
    console.log('FETCH MOVIE', movieId);
    return { id: movieId, title: 'Movie Title' };
  }
});

export const Route = createFileRoute('/movie/$movieId/')({
  loader: ({ context: { queryClient }, params: { movieId } }) => {
    return queryClient.ensureQueryData(movieQuery(movieId));
  },
  component: Movie
});

function Movie() {
  const movieId = Route.useParams().movieId;
  const {
    data: { title }
  } = useSuspenseQuery(movieQuery(movieId));

  return (
    <>
      {title} - {movieId}
    </>
  );
}
