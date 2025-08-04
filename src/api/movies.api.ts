import { Movie, MovieLite } from '@/interfaces/movies.interfaces';
import { ResultQuery } from '@/interfaces/queries.interfaces';
import { axiosInstance } from '@config/axiosInstance';

export const getMovieList = async (pageParam: {
  start: number;
  sortBy?: string;
  filter?: string;
}): Promise<ResultQuery<MovieLite>> => {
  const response = await axiosInstance.get(
    `/movies?sortby=releaseDate&start=${pageParam.start}&limit=50`
  );
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
