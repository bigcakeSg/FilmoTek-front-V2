import { useQuery } from '@tanstack/react-query';
import { getMovies } from '@api/movies.api';
import type { ResultQuery } from '@interfaces/queries.interfaces';
import type { MovieLite } from '@interfaces/movies.interfaces';

export const useMovies = () => {
  const { data, isFetching } = useQuery<ResultQuery<MovieLite>>({
    queryKey: ['movieList'],
    queryFn: () => {
      return getMovies();
    }
  });

  return { data: data?.data || [], isFetching };
};
