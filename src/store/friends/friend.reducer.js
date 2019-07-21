import { FriendActionTypes } from './friend.action';

export const initialState = {
  friends: [],
  friendRequests: [],
  recommendFriends: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FriendActionTypes.GET_FRIENDS.SUCCESS:
      return {
        ...state,
        friends: action.payload.friends || [],
      };
    case FriendActionTypes.GET_REQUESTS_FRIENDS.SUCCESS:
      return {
        ...state,
        friendRequests: action.payload.response
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
