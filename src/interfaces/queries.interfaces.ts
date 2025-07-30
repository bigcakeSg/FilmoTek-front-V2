export interface ResultQuery<T> {
  count: number;
  totalCount: number;
  start?: number;
  limit?: number;
  data: T[];
}
