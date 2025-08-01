import { setAuthTokens, clearAuthTokens } from 'axios-jwt';
import { axiosInstance } from '@/config/axiosInstance';
import {
  clearAllAuthData,
  clearRememberMePreference,
  setRememberMePreference
} from '@/utils/storage.utils';

export const login = async (
  params: Readonly<{
    username: string;
    password: string;
    rememberMe?: boolean;
  }>
) => {
  const response = await axiosInstance.post('/auth/signin', {
    username: params.username,
    password: params.password
  });

  // Store the rememberMe preference before setting tokens
  if (params.rememberMe !== undefined) {
    setRememberMePreference(JSON.parse(params.rememberMe.toString()));
  }

  // Save tokens to storage
  setAuthTokens({
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  });
};

export const logout = async () => {
  clearRememberMePreference();
  clearAllAuthData();
  await clearAuthTokens();
};
