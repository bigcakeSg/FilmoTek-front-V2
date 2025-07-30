import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../api/movies.api';

interface Movie {
  _id: string;
  imdbId: string;
  originalTitle: string;
  frenchTitle?: string;
  picture: string;
  releaseDate: string;
  duration: number;
  genres: {
    id: string;
    text: string;
  }[];
  supports: string[];
  watched?: boolean;
}

interface resultMovies {
  count: number;
  totalCount: number;
  start?: number;
  limit?: number;
  data: Movie[];
}

export const useMovies = () => {
  const { data, isFetching } = useQuery<resultMovies>({
    queryKey: ['movieList'],
    queryFn: () => {
      // throw new MovieNotFoundError(`Movie with id "${movieId}" not found!`);
      return getMovies();
    }
  });

  return { data: data?.data || [], isFetching };
};
