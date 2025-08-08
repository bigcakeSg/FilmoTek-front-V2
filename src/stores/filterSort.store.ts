import { create } from 'zustand';
import { combine } from 'zustand/middleware';

export type FilterName = 'genre' | 'support' | 'collection' | 'name' | 'title';
export type SortName =
  | 'releaseDate'
  | 'normalizedOriginalTitle'
  | 'normalizedFrenchTitle'
  | 'normalizedEnglishTitle'
  | 'supports';

export interface Filter {
  name: FilterName;
  value: string;
}

export interface Sort {
  name: SortName;
  direction: 'asc' | 'desc';
}

export interface FilterSortActions {
  setSort: (sort: Sort) => void;
  setFilters: (filter: Filter[]) => void;
  clearFilters: () => void;
}

interface FilterSortContext {
  filters: Filter[];
  sort: Sort;
}

const defaultFilterSortContext: FilterSortContext = {
  filters: [],
  sort: { name: 'releaseDate', direction: 'asc' }
};

const useFilterSortStore = create<FilterSortContext & FilterSortActions>()(
  combine(defaultFilterSortContext, (set) => ({
    setSort: (sort) => set((state) => ({ ...state, sort })),
    setFilters: (filters) => set((state) => ({ ...state, filters })),
    clearFilters: () =>
      set((state) => ({
        ...state,
        filters: defaultFilterSortContext.filters
      }))
  }))
);

export default useFilterSortStore;
