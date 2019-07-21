import RequestApi from 'utils/request';

const register = registerEventData => {
  return RequestApi.post('/event', { ...registerEventData });
};

export default {
  register,
};
