import { SortDirection, SortName } from '@/interfaces/filterSort.interface';
import { Movie, MovieLite } from '@/interfaces/movies.interfaces';
import { ResultQuery } from '@/interfaces/queries.interfaces';
import { axiosInstance } from '@config/axiosInstance';

export const getMovieList = async (pageParam: {
  start?: number;
  limit?: number;
  sortBy?: SortName;
  direction?: SortDirection;
  filter?: string[];
}): Promise<ResultQuery<MovieLite>> => {
  const response = await axiosInstance.get(`/movies`, {
    params: {
      sortby: pageParam.sortBy,
      direction: pageParam.direction,
      start: pageParam.start,
      limit: pageParam.limit,
      filter: pageParam.filter
    }
  });
  return response.data;
};

export const getMovie = async (pageParam: {
  movieId: string;
}): Promise<Movie> => {
  const response = await axiosInstance.get(
    `/movies/title/${pageParam.movieId}`
  );
  return response.data;
};
