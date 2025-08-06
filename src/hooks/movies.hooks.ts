import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovie, getMovieList } from '@api/movies.api';

export const useGetMovieList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['movieList'],
    queryFn: ({ pageParam }) => getMovieList({ start: pageParam }),
    initialPageParam: 0,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => {
      const start = lastPage.start || 0;
      const limit = lastPage.limit || 50;
      const param = start + limit;

      if (lastPage.totalCount === undefined) return null;
      if (param >= lastPage.totalCount) return null;
      return start + limit;
    }
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  };
};

// TODO: faire un hook
export const movieQuery = (movieId: string) => ({
  queryKey: ['movie', movieId],
  queryFn: () => getMovie({ movieId })
});
