import { axiosInstance } from '@/config/axiosInstance';

export const getStatsBySupport = async (): Promise<Record<string, number>> => {
  const response = await axiosInstance.get(`/stats/bysupport`);
  return response.data;
};

export const getStatsByGenre = async (): Promise<Record<string, number>> => {
  const response = await axiosInstance.get(`/stats/bygenre`);
  return response.data;
};

export const getStatsByDate = async (): Promise<
  Record<number, { total: number }>
> => {
  const response = await axiosInstance.get(`/stats/bydate`);
  return response.data;
};

export const getStatsDuration = async (): Promise<number> => {
  const response = await axiosInstance.get(`/stats/duration`);
  return response.data;
};
