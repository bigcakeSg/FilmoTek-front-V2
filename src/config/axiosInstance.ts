import {
  IAuthTokens,
  TokenRefreshRequest,
  applyAuthTokenInterceptor,
  getBrowserLocalStorage
} from 'axios-jwt';
import axios from 'axios';

// Create an axios instance that you wish to apply the interceptor to
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

// Define token refresh function
const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string
): Promise<IAuthTokens | string> => {
  const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
    refreshToken
  });

  const tokens = {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  };
  localStorage.setItem('auth-tokens-development', JSON.stringify(tokens));
  return response.data.access_token;
};

// initialize with dynamic storage
applyAuthTokenInterceptor(axiosInstance, {
  requestRefresh,
  getStorage: getBrowserLocalStorage
});
