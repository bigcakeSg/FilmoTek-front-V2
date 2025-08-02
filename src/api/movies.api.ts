import { axiosInstance } from '@config/axiosInstance';

export const getMovies = async ({ pageParam }: { pageParam?: number }) => {
  const response = await axiosInstance.post(
    `/movies?sortby=releaseDate&start=${pageParam}&limit=30`
  );
  return response.data;
};
