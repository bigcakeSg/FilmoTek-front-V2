import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { Filter, FilterName, Sort } from '@/interfaces/filterSort.interface';

interface RouteStore {
  page: number;
  limit: number;
  sort: Sort;
  filter: Filter[];
}

export interface RouteActions {
  setRoute: (route: Partial<RouteStore>) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setSort: (sort: Sort) => void;
  setFilter: (filter: Filter[]) => void;
  addFilter: (filter: Filter[]) => void;
  removeFilter: (filterName: FilterName) => void;
  clearFilters: () => void;
}

const defaultRouteContext: RouteStore = {
  page: 1,
  limit: 30,
  sort: {
    name: 'releaseDate',
    direction: 'asc'
  },
  filter: []
};

const useRouteStore = create<RouteStore & RouteActions>()(
  combine(defaultRouteContext, (set) => ({
    setRoute: (route) => set((state) => ({ ...state, ...route })),
    setPage: (page) => set((state) => ({ ...state, page })),
    setLimit: (limit) => set((state) => ({ ...state, limit })),
    setSort: (sort) => set((state) => ({ ...state, sort })),
    setFilter: (filter) => set((state) => ({ ...state, filter })),
    addFilter: (filter) =>
      set((state) => ({ ...state, filter: [...state.filter, ...filter] })),
    removeFilter: (filterName) =>
      set((state) => ({
        ...state,
        filter: state.filter.filter((f) => f.name !== filterName)
      })),
    clearFilters: () => set((state) => ({ ...state, filter: [] }))
  }))
);

export default useRouteStore;
