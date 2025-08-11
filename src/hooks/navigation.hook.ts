import { SortDirection, SortName } from '@/interfaces/filterSort.interface';
import useRouteStore from '@/stores/route.store';
import { useLocation } from '@tanstack/react-router';

export const useNavigation = () => {
  const { search } = useLocation();
  const { limit } = useRouteStore();

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
    start: search.page && search.page >= 1 ? limit * (search.page - 1) : 0,
    limit: limit,
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
