import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getMovie, getMovieList, getMovieListByName } from '@api/movies.api';
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

export const useGetMovieDetail = (movieId: string) => {
  const { data, refetch, error, isFetching, status } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie({ movieId }),
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

export const useGetMovieListByName = (nameId: string) => {
  const { data, refetch, error, isFetching, status } = useQuery({
    queryKey: ['movieListByName', nameId],
    queryFn: () => getMovieListByName(nameId),
    refetchOnWindowFocus: false,
    staleTime: 60000 * 5,
    enabled: false
  });

  return {
    data,
    refetch,
    error,
    isFetching,
    status
  };
};
