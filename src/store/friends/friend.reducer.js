import { FriendActionTypes } from './friend.action';

export const initialState = {
  friends: [],
  friendRequestsReceive: [],
  friendRequestsSend: [],
  recommendFriends: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FriendActionTypes.GET_FRIENDS.SUCCESS:
      return {
        ...state,
        friends: action.payload.response.users || [],
      };

    case FriendActionTypes.GET_FRIEND_RECEIVE.SUCCESS:
      return {
        ...state,
        friendRequestsReceive: action.payload.response.users || [],
      };

    case FriendActionTypes.GET_REQUESTS_FRIENDS.SUCCESS:
      return {
        ...state,
        friendRequestsSend: action.payload.response
          ? action.payload.response.users
          : [],
      };
    case FriendActionTypes.GET_RECOMMEND_FRIENDS.SUCCESS:
      return {
        ...state,
        recommendFriends: action.payload.response
          ? action.payload.response.users
          : [],
      };
    default:
      return state;
  }
};

export default friendReducer;
