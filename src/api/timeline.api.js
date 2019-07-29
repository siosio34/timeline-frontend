import RequestApi from 'utils/request';

const getTimeline = ({ page = 0 }) => {
  return RequestApi.get(`/timeline?page=${page}`);
};

const getUserTimeline = ({ email, page = 0 }) => {
  return RequestApi.get(`/timeline/${email}?page=${page}`);
};

export default {
  getTimeline,
  getUserTimeline,
};
