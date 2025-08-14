export type SortDirection = 'asc' | 'desc';

export type SortName =
  | 'releaseDate'
  | 'normalizedOriginalTitle'
  | 'normalizedFrenchTitle'
  | 'normalizedEnglishTitle'
  | 'supports';

export type FilterName = 'genre' | 'support' | 'collection' | 'name' | 'title';

export interface Filter {
  name: FilterName;
  value: string;
}
export interface Sort {
  name: SortName;
  direction: SortDirection;
}
