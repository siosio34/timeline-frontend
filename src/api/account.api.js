import RequestApi from 'utils/request';

const login = loginAccountData => {
  return RequestApi.post('/accounts/login', { ...loginAccountData });
};

const register = registerAccountData => {
  return RequestApi.post('/accounts/register', {
    ...registerAccountData,
    profileImage: {
      thumbUrl: '',
      url: '',
    },
  });
};

const refreshToken = token => {
  return RequestApi.get(`/accounts/refresh/${token}`);
};

const checkDuplicateEmail = email => {
  return RequestApi.get(`/accounts/duplicate/${email}`);
};

export default {
  login,
  register,
  refreshToken,
  checkDuplicateEmail,
};
