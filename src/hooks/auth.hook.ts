import { useQuery } from '@tanstack/react-query';
import { getMe, login } from '@api/login.api';
import useUserStore from '@stores/user.store';

export const useLogin = (params: {
  username: string;
  password: string;
  rememberMe?: boolean;
}) => {
  const { error, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: ['login'],
    queryFn: () => login(params),
    enabled: false
  });

  return { error, isFetching, refetch, isError, isSuccess };
};

export const useMe = () => {
  const { data, error, isFetching, refetch, isError, isSuccess } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMe(),
    enabled: false
  });

  return { data, error, isFetching, refetch, isError, isSuccess };
};

export const useRole = () => {
  const { user } = useUserStore();

  return { isAdmin: user?.role === 'admin' };
};
