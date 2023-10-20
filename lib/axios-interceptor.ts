import axios from 'axios';
import fingerprint from '@/lib/fingerprint';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { getActions } from '@/hooks/use-auth-store';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const action = getActions();

const $api = axios.create({
  validateStatus: function (status) {
    return status == 200 || status == 201;
  },
  withCredentials: true,
  baseURL: `${API_URL}/api`,
});

$api.interceptors.request.use(async (config) => {
  config.headers.authorization = `Bearer ${getCookie('token-access')}`;
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
        const response = await axios.get(`${API_URL}/api/auth/refresh`, {
          withCredentials: true,
          headers: {
            fingerprint: await fingerprint,
          },
        });

        deleteCookie('token-access');
        setCookie('token-access', response.data.data.accessToken);
        action.setLoggedIn();

        return $api.request(originalRequest);
      } catch (e) {
        // remove remained data
        console.log({ e });
        deleteCookie('token-access');
        action.setLogout();

        // console.log('NOT AUTHORIZED OR INCORRECT ACCESS TOKEN FORMAT!');
      }
    }
    return Promise.reject(error);
    // return error;
  },
);

export default $api;
