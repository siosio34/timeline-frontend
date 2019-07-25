import RequestApi from 'utils/request';

const getMyProfile = () => {
  return RequestApi.get('/profile');
};

export default {
  getMyProfile,
};