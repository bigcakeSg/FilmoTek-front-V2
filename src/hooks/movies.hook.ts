import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getMovie,
  getMovieList,
  getMovieListByName,
  patchMovie
} from '@api/movies.api';
import { SortDirection, SortName } from '@/interfaces/filterSort.interface';
import { Movie } from '@/interfaces/movies.interfaces';

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
    staleTime: 1000 * 60 * 5 // 5 minutes
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
      staleTime: 1000 * 60 * 5 // 5 minutes
    });
  };

  return { prefetchMovies };
};

export const useGetMovieDetail = (movieId: string) => {
  const { data, refetch, error, isFetching, status } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie({ movieId }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
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
    enabled: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  return {
    data,
    refetch,
    error,
    isFetching,
    status
  };
};

export const usePatchMovie = (movieId: string) => {
  const queryClient = useQueryClient();

  const { data, mutate, error, isPending } = useMutation({
    mutationFn: (movieData: Partial<Movie>) => patchMovie(movieId, movieData),
    onMutate: () => {
      // TODO: Optimistically update the movie list ???
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'movieList' ||
          query.queryKey[0] === 'movieListByName' ||
          (query.queryKey[0] === 'movie' && query.queryKey[1] === movieId)
      });
    },
    onError: () => {
      // TODO: toaster
    }
  });

  return { data, mutate, error, isPending };
};
