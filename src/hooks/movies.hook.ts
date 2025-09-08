import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteMovie,
  getMovie,
  getMovieFromApi,
  getMovieList,
  getMovieListByGenre,
  getMovieListByName,
  getRandomMovie,
  patchMovie,
  postMovie
} from '@api/movies.api';
import { SortDirection, SortName } from '@interfaces/filterSort.interface';
import { Movie } from '@interfaces/movies.interfaces';
import { useNavigate } from '@tanstack/react-router';
import useRouteStore from '@stores/route.store';
import { toaster } from '@/components/ui/ToasterComponent/toaster';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';

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

export const useGetRandomMovie = (filter: string[] = []) => {
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery({
    queryKey: ['randomMovie', ...filter],
    queryFn: () => getRandomMovie(filter),
    enabled: false,
    refetchOnWindowFocus: false
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

export const useGetMovieListByGenre = (genreId: string) => {
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery({
    queryKey: ['movieListByGenre', genreId],
    queryFn: () => getMovieListByGenre(genreId),
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

export const usePatchMovie = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate({ from: '/movie/$movieId' });

  const { data, mutate, isSuccess, error, isPending } = useMutation({
    mutationFn: ({
      movieId,
      movieData
    }: {
      movieId: string;
      movieData: Partial<Movie>;
      redirect?: boolean;
    }) => patchMovie(movieId, movieData),
    onSuccess: async (data, params) => {
      toaster.success({
        title: t('toaster.success.title'),
        description: t('toaster.success.updated')
      });

      if (params.redirect)
        await navigate({
          to: '/movie/$movieId',
          params: { movieId: data._id }
        });

      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'movieList' ||
          query.queryKey[0] === 'movieListByName' ||
          (query.queryKey[0] === 'movie' && query.queryKey[1] === data._id) ||
          query.queryKey[0] === 'stats'
      });
    },
    onError: () => {
      toaster.error({
        title: t('toaster.error.title'),
        description: t('toaster.error.updated'),
        duration: Infinity
      });
    }
  });

  return { data, mutate, isSuccess, error, isPending };
};

export const useMovieFromApi = (movieId?: string) => {
  const { data, refetch, isSuccess, error, isFetching, status } = useQuery<
    Movie | undefined,
    AxiosError
  >({
    queryKey: ['movieFromApi', movieId],
    queryFn: () =>
      movieId ? getMovieFromApi(movieId) : Promise.resolve(undefined),
    refetchOnWindowFocus: false,
    enabled: false,
    retry: false
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
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate({ from: '/movie/$movieId' });

  const { data, mutate, isSuccess, error, isPending } = useMutation({
    mutationFn: (movieData: Movie) => postMovie(movieData),
    onSuccess: async (data) => {
      toaster.success({
        title: t('toaster.success.title'),
        description: t('toaster.success.created')
      });

      await navigate({
        to: '/movie/$movieId',
        params: { movieId: data }
      });
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'movieList' ||
          query.queryKey[0] === 'movieListByName' ||
          query.queryKey[0] === 'movieFromApi' ||
          query.queryKey[0] === 'stats'
      });
    },
    onError: () => {
      toaster.error({
        title: t('toaster.error.title'),
        description: t('toaster.error.created'),
        duration: Infinity
      });
    }
  });

  return { data, mutate, isSuccess, error, isPending };
};

export const useDeleteMovie = (movieId: string) => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const navigate = useNavigate({ from: '/' });
  const { sort, filter } = useRouteStore();

  const { data, mutate, isSuccess, error, isPending } = useMutation({
    mutationFn: () => deleteMovie(movieId),
    onSuccess: async () => {
      toaster.success({
        title: t('toaster.success.title'),
        description: t('toaster.success.deleted')
      });

      await navigate({
        to: '/',
        search: {
          page: 1,
          sortBy: sort.name,
          direction: sort.direction,
          filter: filter.map((f) => `${f.name}+${f.value}`)
        }
      });
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0] === 'movieList' ||
          query.queryKey[0] === 'movieListByName' ||
          (query.queryKey[0] === 'movie' && query.queryKey[1] === movieId) ||
          query.queryKey[0] === 'stats'
      });
    },
    onError: () => {
      toaster.error({
        title: t('toaster.error.title'),
        description: t('toaster.error.deleted'),
        duration: Infinity
      });
    }
  });

  return { data, mutate, isSuccess, error, isPending };
};
