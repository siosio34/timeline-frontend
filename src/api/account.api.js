import RequestApi from 'utils/request';

const signin = signinAccountData => {
  return RequestApi.post('/account/signin', { ...signinAccountData });
};

const signup = signupAccountData => {
  return RequestApi.post('/account/signup', { ...signupAccountData });
};

const refreshToken = token => {
  return RequestApi.get(`/account/refresh/${token}`);
};

export default {
  signin,
  signup,
  refreshToken,
};
