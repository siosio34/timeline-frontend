import RequestApi from 'utils/request';

const getMyProfile = () => {
  return RequestApi.get('/profile');
};

const editMyProfile = userEditDto => {
  return RequestApi.put('/profile', userEditDto);
};

export default {
  getMyProfile,
  editMyProfile,
};