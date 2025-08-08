import { SortDirection, SortName } from '@/interfaces/filterSort.interface';
import { useSearch } from '@tanstack/react-router';

export const MOVIES_LIMIT = 30;

export const useNavigation = () => {
  const search = useSearch({ from: '/' });

  const searchFilters = Array.isArray(search.filter)
    ? search.filter
    : [search.filter ? search.filter : ''];

  const moviesQueries: {
    key: string;
    start: number;
    limit: number;
    sortBy: SortName;
    direction: SortDirection;
    filter: string[];
  } = {
    key: 'movieList',
    start:
      search.page && search.page >= 1 ? MOVIES_LIMIT * (search.page - 1) : 0,
    limit: MOVIES_LIMIT,
    sortBy: search.sortBy || 'releaseDate',
    direction: search.direction || 'asc',
    filter: search.filter ? searchFilters : []
  };

  return {
    moviesQueries,
    moviesQueryKey: [
      moviesQueries.key,
      moviesQueries.start,
      moviesQueries.limit,
      moviesQueries.sortBy,
      moviesQueries.direction,
      ...moviesQueries.filter
    ]
  };
};
