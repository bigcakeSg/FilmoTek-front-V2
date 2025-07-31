import {
  IAuthTokens,
  TokenRefreshRequest,
  applyAuthTokenInterceptor
} from 'axios-jwt';
import axios from 'axios';

// Create an axios instance that you wish to apply the interceptor to
const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export const axiosInstance = axios.create({
  baseURL: BASE_URL
});

// Define token refresh function
const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string
): Promise<IAuthTokens | string> => {
  console.log('Refreshing token with:', refreshToken);
  const response = await axios.post(`${BASE_URL}/auth/refresh-token`, {
    refreshToken
  });

  return response.data.access_token;
};

applyAuthTokenInterceptor(axiosInstance, { requestRefresh });
