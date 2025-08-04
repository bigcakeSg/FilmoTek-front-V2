import { movieQuery } from '@/hooks/movies.hooks';
import { Route } from '@/routes/movie.$movieId.index';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function MovieDetail() {
  const movieId = Route.useParams().movieId;
  const { name } = Route.useSearch(); // use to display movies by name
  const { data } = useSuspenseQuery(movieQuery(movieId));

  return (
    <>
      {data.originalTitle} - {movieId} - {name}
    </>
  );
}
