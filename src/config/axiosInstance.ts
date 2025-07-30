import axios from 'axios';

export const axiosInst = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URI
});
