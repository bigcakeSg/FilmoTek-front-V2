import { useInfiniteQuery } from '@tanstack/react-query';
import { getMovie, getMovieList } from '@api/movies.api';
import useFilterSortStore from '@/stores/filterSort.store';

const LIMIT = 20;

export const useGetMovieList = () => {
  const { sort } = useFilterSortStore();
  const {
    data,
    refetch,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['movieList', sort],
    queryFn: ({ pageParam }) =>
      getMovieList({ start: pageParam, sortBy: sort, limit: LIMIT }),
    initialPageParam: 0,
    refetchOnWindowFocus: false,
    // enabled: false,
    getNextPageParam: (lastPage) => {
      const start = lastPage.start || 0;
      const limit = lastPage.limit || 50;
      const param = start + limit;

      if (lastPage.filterCount === undefined) return null;
      if (param >= lastPage.filterCount) return null;
      return start + limit;
    }
  });

  return {
    data,
    refetch,
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
