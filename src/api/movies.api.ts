import { axiosInstance } from '@config/axiosInstance';

export const getMovies = async () => {
  const response = await axiosInstance.post('/movies?sortby=releaseDate');
  return response.data;
};
