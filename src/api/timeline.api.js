import RequestApi from 'utils/request';

const getTimeline = ({ page }) => {
  return RequestApi.get(`/timeline?page=${page}`);
};

const getUserTimeline = ({ email, page }) => {
  return RequestApi.get(`/timeline/${email}?page=${page}`);
};


export default {
  getTimeline,
  getUserTimeline,
};