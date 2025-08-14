import { axiosInstance } from '@/config/axiosInstance';
import { Collection } from '@/interfaces/collections.interface';

export const getCollections = async (): Promise<Collection[]> => {
  const response = await axiosInstance.get(`/collections`);
  return response.data;
};
