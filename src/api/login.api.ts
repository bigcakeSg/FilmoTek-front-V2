import { setAuthTokens } from 'axios-jwt';
import { axiosInstance } from '@/config/axiosInstance';
import { setRememberMePreference } from '@/utils/storage.utils';
import { User } from '@/interfaces/user.interfaces';

export const login = async (params: {
  username: string;
  password: string;
  rememberMe?: boolean;
}): Promise<null> => {
  const response = await axiosInstance.post('/auth/signin', {
    username: params.username,
    password: params.password,
    isNoExpire: true
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

  return null;
};

export const getMe = async (): Promise<User> => {
  const response = await axiosInstance.get<User>('/auth/me');
  return response.data;
};
