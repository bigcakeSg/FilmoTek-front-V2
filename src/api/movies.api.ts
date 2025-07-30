import { axiosInst } from '../config/axiosInstance';

export const getMovies = async () => {
  const response = await axiosInst.post('/movies?sortby=releaseDate');
  return response.data;
};
