import React, { useEffect, useState } from 'react';
import useUserStore from '@/stores/user.store';
import { useShallow } from 'zustand/react/shallow';
import {
  clearAllAuthData,
  getRememberMePreference
} from '@/utils/storage.utils';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next';

interface AuthProviderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
export default function AuthProvider({
  children,
  fallback
}: Readonly<AuthProviderProps>) {
  const { t } = useTranslation();

  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { clearUser } = useUserStore();
  const user = useUserStore(useShallow((state) => state.user));

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const rememberMe = getRememberMePreference();

        // If rememberMe is not set, clear all auth data
        if (!rememberMe.local && rememberMe.session === null && user) {
          clearAllAuthData();
          clearUser();
        }

        // Authenticated if user exists
        setIsAuthenticated(!!user);
      } catch (error) {
        console.error('Error during authentication check:', error);
        setIsAuthenticated(false);
      } finally {
        setIsChecking(false);
      }
    };
    checkAuth();
  }, [clearUser, user]);

  if (isChecking) {
    return <>{fallback || <div>{t('user.checkAuth')}</div>}</>;
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <LoginForm onSuccess={() => console.log('User logged in')} />;
}
