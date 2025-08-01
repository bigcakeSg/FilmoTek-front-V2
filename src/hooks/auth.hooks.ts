// import { useState } from 'react';
import { getMe, login } from '@/api/login.api';
// import { isLoggedIn } from 'axios-jwt';
import { useQuery } from '@tanstack/react-query';

// export const useAuth = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const login = async (
//     username: string,
//     password: string,
//     rememberMe: boolean = false
//   ) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       await loginApi({ username, password, rememberMe });
//       return true;
//     } catch (err: unknown) {
//       let errorMessage = 'Erreur de connexion';

//       if (err instanceof Error) {
//         errorMessage = err.message;
//       } else if (typeof err === 'object' && err !== null && 'response' in err) {
//         const response = (err as { response?: { data?: { message?: string } } })
//           .response;
//         errorMessage = response?.data?.message || 'Erreur de connexion';
//       }

//       setError(errorMessage);
//       return false;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const checkAuthStatus = async () => {
//     return await isLoggedIn();
//   };

//   return {
//     login,
//     checkAuthStatus,
//     isLoading,
//     error
//   };
// };

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
