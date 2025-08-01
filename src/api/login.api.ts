import { setAuthTokens } from 'axios-jwt';
import { axiosInstance } from '@/config/axiosInstance';
import { setRememberMePreference } from '@/utils/storage.utils';
import { Me } from '@/interfaces/user.interfaces';

export const login = async (params: {
  username: string;
  password: string;
  rememberMe?: boolean;
}): Promise<null> => {
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

  return null;
};

export const getMe = async (): Promise<Me> => {
  const response = await axiosInstance.get<Me>('/auth/me');
  return response.data;
};
