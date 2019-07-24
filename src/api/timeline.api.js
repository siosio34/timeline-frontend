import RequestApi from 'utils/request';

const getTimeline = () => {
  return '';
};

const getUserTimeline = ({ email, page }) => {
  return RequestApi.get(`/timeline/${email}?page=${page}`);
};

export default {
  getTimeline,
  getUserTimeline,
};