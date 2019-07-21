import RequestApi from 'utils/request';

const getFriends = () => {
  return RequestApi.get('/friends');
};

const getRecommendFriends = () => {
  return RequestApi.get('/friends/recommend');
};

const getFriendsRequest = () => {
  return RequestApi.get('/friends/requests');
};

const createFriendsRequest = requestEmail => {
  return RequestApi.post('/friends/request', { requestEmail });
};

const allowFriendRequest = requestEmail => {
  return RequestApi.put(`/friends/requests/${requestEmail}`, {
    accepted: true,
  });
};

const denyFriendRequest = requestEmail => {
  return RequestApi.put(`/friends/requests${requestEmail}`, {
    accepted: false,
  });
};

export default {
  getFriends,
  getRecommendFriends,
  getFriendsRequest,
  createFriendsRequest,
  allowFriendRequest,
  denyFriendRequest,
};
