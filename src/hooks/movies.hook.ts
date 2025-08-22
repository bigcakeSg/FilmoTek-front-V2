import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getMovie,
  getMovieFromApi,
  getMovieList,
  getMovieListByName,
  patchMovie,
  postMovie
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
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery({
    queryKey: [key, start, limit, sortBy, direction, ...filter],
    queryFn: () => getMovieList({ start, limit, sortBy, direction, filter }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  return {
    data,
    refetch,
    isSuccess,
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

export const useGetMovieDetail = (movieId?: string) => {
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () =>
      movieId ? getMovie({ movieId }) : Promise.resolve(undefined),
    refetchOnWindowFocus: false,
    enabled: !!movieId,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  return {
    data,
    refetch,
    isSuccess,
    error,
    isFetching,
    status
  };
};

export const useGetMovieListByName = (nameId: string) => {
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery({
    queryKey: ['movieListByName', nameId],
    queryFn: () => getMovieListByName(nameId),
    refetchOnWindowFocus: false,
    enabled: false,
    staleTime: 1000 * 60 * 5 // 5 minutes
  });

  return {
    data,
    refetch,
    isSuccess,
    error,
    isFetching,
    status
  };
};

export const usePatchMovie = (movieId: string) => {
  const queryClient = useQueryClient();

  const { data, mutate, isSuccess, error, isPending } = useMutation({
    mutationFn: (movieData: Partial<Movie>) => patchMovie(movieId, movieData),
    onMutate: () => {
      // TODO: Optimistically update???
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

  return { data, mutate, isSuccess, error, isPending };
};

export const useMovieFromApi = (movieId?: string) => {
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery({
    queryKey: ['movieFromApi', movieId],
    queryFn: () =>
      movieId ? getMovieFromApi(movieId) : Promise.resolve(undefined),
    refetchOnWindowFocus: false,
    enabled: false
  });

  return {
    data,
    refetch,
    isSuccess,
    error,
    isFetching,
    status
  };
};

export const usePostMovie = () => {
  const queryClient = useQueryClient();

  const { data, mutate, isSuccess, error, isPending } = useMutation({
    mutationFn: (movieData: Movie) => postMovie(movieData),
    onMutate: () => {
      // TODO: Optimistically update???
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'movieList' ||
          query.queryKey[0] === 'movieListByName' ||
          query.queryKey[0] === 'movieFromApi'
      });
    },
    onError: () => {
      // TODO: toaster
    }
  });

  return { data, mutate, isSuccess, error, isPending };
};
