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

export const getMovieListByName = async (
  nameId: string
): Promise<ResultQuery<Movie>> => {
  const response = await axiosInstance.get(`/movies`, {
    params: {
      sortby: 'releaseDate',
      direction: 'asc',
      filter: `name+${nameId}`,
      format: 'full'
    }
  });
  return response.data;
};

export const patchMovie = async (
  movieId: string,
  movieData: Partial<Movie>
): Promise<Movie> => {
  const response = await axiosInstance.patch(
    `/movies/title/${movieId}`,
    movieData
  );
  return response.data;
};

export const getMovieFromApi = async (movieId: string): Promise<Movie> => {
  const response = await axiosInstance.get(`/movies/api-imdb/title/${movieId}`);
  return response.data;
};

export const postMovie = async (movieData: Movie): Promise<string> => {
  const response = await axiosInstance.post(`/movies/title`, movieData);
  return response.data;
};

export const deleteMovie = async (movieId: string): Promise<void> => {
  const response = await axiosInstance.delete(`/movies/title/${movieId}`);
  return response.data;
};
