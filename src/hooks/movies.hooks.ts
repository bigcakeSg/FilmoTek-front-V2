import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovies } from '@api/movies.api';

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
    queryFn: getMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const param = lastPage.start + lastPage.limit;
      if (param >= lastPage.totalCount) return null;
      return lastPage.start + lastPage.limit;
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
