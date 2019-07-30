import {
  makeActionCreator,
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const FriendActionTypes = {
  GET_FRIENDS: makeAsyncActionTypes('GET_FRIENDS'),
  DELETE_FRIEND: makeAsyncActionTypes('DELETE_FRIEND'),
  GET_RECOMMEND_FRIENDS: makeAsyncActionTypes('GET_RECOMMEND_FRIENDS'),
  GET_REQUESTS_FRIENDS: makeAsyncActionTypes('GET_REQUESTS_FRIENDS'),
  CREATE_REQUEST_FRIEND: makeAsyncActionTypes('CREATE_REQUEST_FRIEND'),
  CANCEL_REQUEST_FRIEND: makeAsyncActionTypes('CANCEL_REQUEST_FRIEND'),
  GET_FRIEND_RECEIVE: makeAsyncActionTypes('GET_FRIEND_RECEIVE'),
  ALLOW_REQUEST_FRIEND: makeAsyncActionTypes('ALLOW_REQUEST_FRIEND'),
  DENY_REQUEST_FRIEND: makeAsyncActionTypes('DENY_REQUEST_FRIEND'),
  HANDLE_FRIEND_SEARCH_INPUT_CHANGE: 'HANDLE_FRIEND_SEARCH_INPUT_CHANGE',
};

export const FriendActionCreators = {
  getFriends: makeAsyncActionCreator(FriendActionTypes.GET_FRIENDS),
  deleteFriend: makeAsyncActionCreator(FriendActionTypes.DELETE_FRIEND),
  getRecommendFriends: makeAsyncActionCreator(
    FriendActionTypes.GET_RECOMMEND_FRIENDS,
  ),
  getFriendsRequest: makeAsyncActionCreator(
    FriendActionTypes.GET_REQUESTS_FRIENDS,
  ),
  createFriendsRequest: makeAsyncActionCreator(
    FriendActionTypes.CREATE_REQUEST_FRIEND,
  ),
  cancelFriendsRequest: makeAsyncActionCreator(
    FriendActionTypes.CANCEL_REQUEST_FRIEND,
  ),
  getFriendsReceive: makeAsyncActionCreator(
    FriendActionTypes.GET_FRIEND_RECEIVE,
  ),
  allowFriendRequest: makeAsyncActionCreator(
    FriendActionTypes.ALLOW_REQUEST_FRIEND,
  ),
  denyFriendRequest: makeAsyncActionCreator(
    FriendActionTypes.DENY_REQUEST_FRIEND,
  ),
  handleFriendSearchInputChange: makeActionCreator(
    FriendActionTypes.HANDLE_FRIEND_SEARCH_INPUT_CHANGE,
  ),
};
