import { Movie, MovieLite } from '@/interfaces/movies.interfaces';
import { ResultQuery } from '@/interfaces/queries.interfaces';
import { Sort } from '@/stores/filterSort.store';
import { axiosInstance } from '@config/axiosInstance';

export const getMovieList = async (pageParam: {
  start: number;
  limit: number;
  sortBy: Sort;
  filter?: string;
}): Promise<ResultQuery<MovieLite>> => {
  const response = await axiosInstance.get(`/movies`, {
    params: {
      sortby: pageParam.sortBy.name,
      direction: pageParam.sortBy.direction,
      start: pageParam.start,
      limit: pageParam.limit
      // filter: 'genre+688931465d35dd32f8d16677'
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
