import { FriendActionTypes } from './friend.action';

export const initialState = {
  friends: [],
  friendRequestsReceive: [],
  friendRequestsSend: [],
  recommendFriends: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FriendActionTypes.GET_FRIENDS.INDEX:
      return {
        ...state,
        friends: []
      };

    case FriendActionTypes.GET_FRIENDS.SUCCESS:
      return {
        ...state,
        friends: action.payload.response.friends || [],
      };

    case FriendActionTypes.GET_FRIEND_RECEIVE.INDEX:
      return {
        ...state,
        friendRequestsReceive: [],
      };

    case FriendActionTypes.GET_FRIEND_RECEIVE.SUCCESS:
      return {
        ...state,
        friendRequestsReceive: action.payload.response.friends || [],
      };

    case FriendActionTypes.GET_REQUESTS_FRIENDS.INDEX:
      return {
        ...state,
        friendRequestsSend: [],
      };

    case FriendActionTypes.GET_REQUESTS_FRIENDS.SUCCESS:
      return {
        ...state,
        friendRequestsSend: action.payload.response
          ? action.payload.response.friends
          : [],
      };

    case FriendActionTypes.GET_RECOMMEND_FRIENDS.INDEX:
      return {
        ...state,
        recommendFriends: [],
      };

    case FriendActionTypes.GET_RECOMMEND_FRIENDS.SUCCESS:
      return {
        ...state,
        recommendFriends: action.payload.response
          ? action.payload.response.friends
          : [],
      };
    default:
      return state;
  }
};

export default friendReducer;
