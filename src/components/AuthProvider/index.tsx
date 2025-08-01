import React, { useEffect, useState } from 'react';
import useUserStore from '@/stores/user.store';
import { useShallow } from 'zustand/react/shallow';
import {
  clearAllAuthData,
  getRememberMePreference
} from '@/utils/storage.utils';
import LoginForm from './LoginForm';

interface AuthProviderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
export default function AuthProvider({
  children,
  fallback = <div>Vérification de l'authentification...</div>
}: Readonly<AuthProviderProps>) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { clearUser } = useUserStore();
  const user = useUserStore(useShallow((state) => state.user));

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const rememberMe = getRememberMePreference();

        if (!rememberMe.local && rememberMe.session === null && user) {
          clearAllAuthData();
          clearUser();
        }
        setIsAuthenticated(!!user);
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de l'authentification:",
          error
        );
        setIsAuthenticated(false);
      } finally {
        setIsChecking(false);
      }
    };
    checkAuth();
  }, [clearUser, user]);

  if (isChecking) {
    return <>{fallback}</>;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <LoginForm onSuccess={() => console.log('LOGGED!!!')} />;
}
