import RequestApi from 'utils/request';

const signin = signinAccountData => {
  return RequestApi.post('/accounts/signin', { ...signinAccountData });
};

const register = registerAccountData => {
  return RequestApi.post('/accounts/register', { ...registerAccountData });
};

const refreshToken = token => {
  return RequestApi.get(`/accounts/refresh/${token}`);
};

const checkDuplicateEmail = email => {
  return RequestApi.get(`/accounts/duplicate/${email}`);
};

export default {
  signin,
  register,
  refreshToken,
  checkDuplicateEmail,
};
