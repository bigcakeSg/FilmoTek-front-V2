export interface ResultQuery<T> {
  totalCount: number;
  filterCount: number;
  countToEnd: number;
  start: number;
  limit?: number;
  data: T[];
}
