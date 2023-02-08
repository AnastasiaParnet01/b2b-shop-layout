import axios from 'axios';
import { localStorageService } from 'utils/localStorageService';
import { loginApi } from 'api/app-api';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

axios.interceptors.request.use(
  async (config) => {
    const sessionKey = localStorageService.getToken();

    if (config && sessionKey) {
      config.params.sessionKey = sessionKey;
    }

    if (config.headers) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Access-Control-Allow-Origin'] = '*';
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 1054 || error?.response?.status === 1055) {
      loginApi.signIn().then(
        (response: any) => localStorageService.setToken(response.records.sessionKey),
      );
    }

    return Promise.reject(error);
  },
);

export default axios;
