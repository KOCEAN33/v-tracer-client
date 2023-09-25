import axios from 'axios';
import Cookies from 'js-cookie';
import fingerprint from '@/lib/fingerprint';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const $api = axios.create({
  validateStatus: function (status) {
    return status == 200 || status == 201;
  },
  withCredentials: true,
  baseURL: `${API_URL}/api`,
});

const authApi = axios.create({
  withCredentials: true,
  baseURL: `${API_URL}/api`,
});

$api.interceptors.request.use(async (config) => {
  config.headers.authorization = `Bearer ${Cookies.get('token-access')}`;
  config.headers.fingerprint = await fingerprint;
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
        const response = await authApi.get('auth/refresh');

        Cookies.remove('token-access');
        Cookies.set('token-access', response.data.accessToken);

        return $api.request(originalRequest);
      } catch (e) {
        // remove remained data
        Cookies.remove('token-access');
        localStorage.removeItem('user-storage');

        console.log('NOT AUTHORIZED OR INCORRECT ACCESS TOKEN FORMAT!');
      }
    }
    return Promise.reject(error);
  },
);

export default $api;
