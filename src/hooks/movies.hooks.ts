import { useQuery } from '@tanstack/react-query';
import { getMovie, getMovieList } from '@api/movies.api';
import { SortDirection, SortName } from '@/interfaces/filterSort.interface';

export const useGetMovieList = (
  page: number,
  limit: number,
  sortBy: SortName,
  direction: SortDirection
) => {
  const start = page >= 1 ? limit * (page - 1) : 0;
  const { data, refetch, error, isFetching, status } = useQuery({
    queryKey: ['movieList', page >= 1 ? page : 1, limit, sortBy, direction],
    queryFn: () => getMovieList({ start, limit, sortBy, direction }),
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

// TODO: faire un hook
export const movieQuery = (movieId: string) => ({
  queryKey: ['movie', movieId],
  queryFn: () => getMovie({ movieId })
});
