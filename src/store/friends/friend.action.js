import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const FriendActionTypes = {
  GET_FRIENDS: makeAsyncActionTypes('GET_FRIENDS'),
  GET_RECOMMEND_FRIENDS: makeAsyncActionTypes('GET_RECOMMEND_FRIENDS'),
  GET_REQUESTS_FRIENDS: makeAsyncActionTypes('GET_REQUESTS_FRIENDS'),
  CREATE_REQUEST_FRIEND: makeAsyncActionTypes('CREATE_REQUEST_FRIEND'),
  ALLOW_REQUEST_FRIEND: makeAsyncActionTypes('ALLOW_REQUEST_FRIEND'),
  DENY_REQUEST_FRIEND: makeAsyncActionTypes('DENY_REQUEST_FRIEND'),
};

export const FriendActionCreators = {
  getFriends: makeAsyncActionCreator(FriendActionTypes.GET_FRIENDS),
  getRecommendFriends: makeAsyncActionCreator(
    FriendActionTypes.GET_RECOMMEND_FRIENDS,
  ),
  getFriendsRequest: makeAsyncActionCreator(
    FriendActionTypes.GET_REQUESTS_FRIENDS,
  ),
  createFriendsRequest: makeAsyncActionCreator(
    FriendActionTypes.CREATE_REQUEST_FRIEND,
  ),
  allowFriendRequest: makeAsyncActionCreator(
    FriendActionTypes.ALLOW_REQUEST_FRIEND,
  ),
  denyFriendRequest: makeAsyncActionCreator(
    FriendActionTypes.DENY_REQUEST_FRIEND,
  ),
};
