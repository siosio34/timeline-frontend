import RequestApi from 'utils/request';

const getFriends = () => {
  return RequestApi.get('/friends');
};

const deleteFriend = requestEmail => {
  return RequestApi.delete(`/friends/${requestEmail}`);
};

const getRecommendFriends = () => {
  return RequestApi.get('/friends/recommend');
};

const getFriendsRequest = () => {
  return RequestApi.get('/friends/requests/sends');
};

const createFriendsRequest = requestEmail => {
  return RequestApi.post('/friends/requests/send', { requestEmail });
};

const cancelFriendsRequest = requestEmail => {
  return RequestApi.delete(`/friends/requests/sends/${requestEmail}`);
};

const getFriendsReceive = () => {
  return RequestApi.get('/friends/requests/receive');
};

const allowFriendRequest = requestEmail => {
  return RequestApi.put(`/friends/requests/receives/${requestEmail}`, {
    accept: true,
  });
};

const denyFriendRequest = requestEmail => {
  return RequestApi.put(`/friends/requests/receives/${requestEmail}`, {
    accept: false,
  });
};

export default {
  getFriends,
  deleteFriend,
  getRecommendFriends,
  getFriendsRequest,
  createFriendsRequest,
  cancelFriendsRequest,
  getFriendsReceive,
  allowFriendRequest,
  denyFriendRequest,
};
