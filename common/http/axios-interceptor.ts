import axios from 'axios';
import Cookies from 'js-cookie';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(API_URL);

const $api = axios.create({
  validateStatus: function (status) {
    return status == 200 || status == 201;
  },
  withCredentials: true,
  baseURL: `${API_URL}/api`,
});

$api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${Cookies.get('token-access')}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await $api.get('/auth/refresh', {
          withCredentials: true,
        });
        console.log(response);
        Cookies.remove('token-access');
        Cookies.set('token-access', response.data.data.accessToken);

        return $api.request(originalRequest);
      } catch (e) {
        Cookies.remove('token-access');
      }
    }
    throw error;
  },
);

export default $api;
