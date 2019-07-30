import axios from 'axios';
import { pickBy } from 'lodash';
import { message } from 'antd';

const parsingEmptyValueParams = params =>
  pickBy(params, value => value != null && value !== '');

const RequestApi = axios.create();

RequestApi.defaults.baseURL =
  process.env.server || 'http://apis.timeline.ryulth.com';

RequestApi.interceptors.request.use(
  config => {
    const parsedParams = parsingEmptyValueParams(config.params);
    config.params = parsedParams;

    const accessToken = window.localStorage.getItem('access_token');
    const isLoginURL = config.url && config.url.includes('accounts');

    if (accessToken && isLoginURL === false) {
      config.headers.Authorization = `bearer ${accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

const NOT_AUTHORIZED_HTTP_CODE = 401;

RequestApi.interceptors.response.use(
  response => {
    if (response && response.config.method !== 'get') {
      message.success('요청이 성공적으로 처리되었습니다.', 1.5);
    }
    return response.data;
  },
  error => {
    const { config, response } = error;
    const originalRequest = config;

    if (
      response &&
      response.status === NOT_AUTHORIZED_HTTP_CODE &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = window.localStorage.getItem('refresh_token');
      return RequestApi.get(`/accounts/refresh/${refreshToken}`)
        .then(data => {
          const { access_token, refresh_token } = data;
          window.localStorage.setItem('access_token', access_token);
          window.localStorage.setItem('refresh_token', refresh_token);
          originalRequest.headers.Authorization = `bearer ${access_token}`;
          return RequestApi(originalRequest);
        })
        .catch(refreshTokenRequestError => {
          if (
            refreshTokenRequestError.response &&
            refreshTokenRequestError.response.status ===
              NOT_AUTHORIZED_HTTP_CODE
          ) {
            window.location.replace('/login');
          }
          return Promise.reject(error);
        });
    }

    message.error('요청이 실패하였습니다.', 1.5);
    return Promise.reject(error);
  },
);

export default RequestApi;
