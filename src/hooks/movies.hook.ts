import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMovie, getMovieList } from '@api/movies.api';
import { SortDirection, SortName } from '@/interfaces/filterSort.interface';

interface MoviesQuery {
  key: string;
  start: number;
  limit: number;
  sortBy: SortName;
  direction: SortDirection;
  filter: string[];
}

export const useGetMovieList = ({
  key,
  start,
  limit,
  sortBy,
  direction,
  filter
}: MoviesQuery) => {
  const { data, refetch, error, isFetching, status } = useQuery({
    queryKey: [key, start, limit, sortBy, direction, ...filter],
    queryFn: () => getMovieList({ start, limit, sortBy, direction, filter }),
    refetchOnWindowFocus: false,
    staleTime: 60000 * 5
  });

  return {
    data,
    refetch,
    error,
    isFetching,
    status
  };
};

export const usePrefetchMovies = () => {
  const queryClient = useQueryClient();

  const prefetchMovies = async ({
    key,
    start,
    limit,
    sortBy,
    direction,
    filter
  }: MoviesQuery) => {
    await queryClient.prefetchQuery({
      queryKey: [key, start, limit, sortBy, direction, ...filter],
      queryFn: () => getMovieList({ start, limit, sortBy, direction, filter }),
      staleTime: 60000 * 5
    });
  };

  return { prefetchMovies };
};

// TODO: faire un hook
export const movieQuery = (movieId: string) => ({
  queryKey: ['movie', movieId],
  queryFn: () => getMovie({ movieId })
});
