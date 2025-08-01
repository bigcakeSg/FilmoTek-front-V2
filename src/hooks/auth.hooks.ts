import { useState } from 'react';
import { login as loginApi, logout as logoutApi } from '@/api/login.api';
import { isLoggedIn } from 'axios-jwt';
// TODO: appels avec useQuery ou useMutation de react-query
export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (
    username: string,
    password: string,
    rememberMe: boolean = false
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      await loginApi({ username, password, rememberMe });
      return true;
    } catch (err: unknown) {
      let errorMessage = 'Erreur de connexion';

      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'object' && err !== null && 'response' in err) {
        const response = (err as { response?: { data?: { message?: string } } })
          .response;
        errorMessage = response?.data?.message || 'Erreur de connexion';
      }

      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutApi();
    } catch (err) {
      console.error('Erreur lors de la déconnexion:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const checkAuthStatus = async () => {
    return await isLoggedIn();
  };

  return {
    login,
    logout,
    checkAuthStatus,
    isLoading,
    error
  };
};
