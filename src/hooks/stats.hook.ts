import {
  getStatsByDate,
  getStatsByGenre,
  getStatsBySupport
} from '@/api/stats.api';
import { useQuery } from '@tanstack/react-query';

export const useStatsBySupport = () => {
  const { data, error, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: ['stats', 'support'],
    queryFn: getStatsBySupport,
    refetchOnWindowFocus: false,
    staleTime: 60000 * 5 // 5 minutes
  });

  return { data: data || {}, error, isFetching, refetch, isError, isSuccess };
};

export const useStatsByGenre = () => {
  const { data, error, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: ['stats', 'genre'],
    queryFn: getStatsByGenre,
    refetchOnWindowFocus: false,
    staleTime: 60000 * 5 // 5 minutes
  });

  return { data: data || {}, error, isFetching, refetch, isError, isSuccess };
};

export const useStatsByDate = () => {
  const { data, error, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: ['stats', 'date'],
    queryFn: getStatsByDate,
    refetchOnWindowFocus: false,
    staleTime: 60000 * 5 // 5 minutes
  });

  return { data: data || {}, error, isFetching, refetch, isError, isSuccess };
};
