import { useQuery } from '@tanstack/react-query';
import { getCollections } from '@/api/collections.api';

export const useCollections = () => {
  const { data, error, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
    refetchOnWindowFocus: false,
    staleTime: 60000 * 5 // 5 minutes
  });

  return { data: data || [], error, isFetching, refetch, isError, isSuccess };
};
