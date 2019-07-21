import RequestApi from 'utils/request';

const register = registerEventData => {
  console.log('registerEventData', registerEventData);
  return RequestApi.post('/apis/event', { ...registerEventData });
};

export default {
  register,
}