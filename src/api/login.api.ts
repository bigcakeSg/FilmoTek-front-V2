import { isLoggedIn, setAuthTokens, clearAuthTokens } from 'axios-jwt';
import { axiosInstance } from '@/config/axiosInstance';

export const login = async (params: { username: string; password: string }) => {
  const response = await axiosInstance.post('/auth/signin', params);

  // save tokens to storage
  setAuthTokens({
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  });
};

export const logout = async () => await clearAuthTokens();

if (await isLoggedIn()) {
  // assume we are logged in because we have a refresh token
}
