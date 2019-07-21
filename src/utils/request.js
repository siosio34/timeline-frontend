import axios from 'axios';
import { pickBy } from 'lodash';

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

let isRefreshing = false;
const refreshSubscribers = [];

function subscribeTokenRefresh(cb) {
  refreshSubscribers.push(cb);
}

function onRrefreshed(token) {
  refreshSubscribers.map(cb => cb(token));
}

RequestApi.interceptors.response.use(
  response => response.data,
  error => {
    const { config, response } = error;
    const originalRequest = config;

    if (response && response.status === NOT_AUTHORIZED_HTTP_CODE) {
      if (!isRefreshing) {
        isRefreshing = true;
        const refreshToken = window.localStorage.getItem('refresh_token');
        return RequestApi.get(`/accounts/refresh/${refreshToken}`)
          .then(({ data }) => {
            const { access_token, refresh_token } = data;
            window.localStorage.setItem('access_token', access_token);
            window.localStorage.setItem('refresh_token', refresh_token);
            isRefreshing = false;
            onRrefreshed(access_token);
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

      const retryOrigReq = new Promise(resolve => {
        subscribeTokenRefresh(token => {
          originalRequest.headers.Authorization = `bearer ${token}`;
          resolve(RequestApi(originalRequest));
        });
      });

      return retryOrigReq;
    }
    return Promise.reject(error);
  },
);

export default RequestApi;
