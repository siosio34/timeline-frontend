import { call, put, takeLatest } from 'redux-saga/effects';

import { FriendApi } from 'api';
import { FriendActionTypes, FriendActionCreators } from './friend.action';

export function* getFriends() {
  try {
    yield put(FriendActionCreators.getFriends.request());
    const response = yield call(FriendApi.getFriends);
    yield put(FriendActionCreators.getFriends.success(response));
  } catch (error) {
    yield put(FriendActionCreators.getFriends.failure(error));
  }
}
export function* getRecommendFriends() {
  try {
    yield put(FriendActionCreators.getRecommendFriends.request());
    const response = yield call(FriendApi.getRecommendFriends);
    yield put(FriendActionCreators.getRecommendFriends.success({ response }));
  } catch (error) {
    yield put(FriendActionCreators.getRecommendFriends.failure(error));
  }
}
export function* getFriendsRequest() {
  try {
    yield put(FriendActionCreators.getFriendsRequest.request());
    const response = yield call(FriendApi.getFriendsRequest);
    yield put(FriendActionCreators.getFriendsRequest.success({ response }));
  } catch (error) {
    yield put(FriendActionCreators.getFriendsRequest.failure(error));
  }
}
export function* createFriendsRequest() {
  try {
    yield put(FriendActionCreators.createFriendsRequest.request());
    const response = yield call(FriendApi.createFriendsRequest);

    yield put(FriendActionCreators.createFriendsRequest.success(response));
  } catch (error) {
    yield put(FriendActionCreators.createFriendsRequest.failure(error));
  }
}
export function* allowFriendRequest() {
  try {
    yield put(FriendActionCreators.allowFriendRequest.request());
    const response = yield call(FriendApi.allowFriendRequest);
    yield put(FriendActionCreators.allowFriendRequest.success(response));
  } catch (error) {
    yield put(FriendActionCreators.allowFriendRequest.failure(error));
  }
}
export function* denyFriendRequest() {
  try {
    yield put(FriendActionCreators.denyFriendRequest.request());
    const response = yield call(FriendApi.denyFriendRequest);
    yield put(FriendActionCreators.denyFriendRequest.success(response));
  } catch (error) {
    yield put(FriendActionCreators.denyFriendRequest.failure(error));
  }
}

export const friendSagas = [
  takeLatest(FriendActionTypes.GET_FRIENDS.INDEX, getFriends),
  takeLatest(
    FriendActionTypes.GET_RECOMMEND_FRIENDS.INDEX,
    getRecommendFriends,
  ),
  takeLatest(FriendActionTypes.GET_REQUESTS_FRIENDS.INDEX, getFriendsRequest),
  takeLatest(
    FriendActionTypes.CREATE_REQUEST_FRIEND.INDEX,
    createFriendsRequest,
  ),
  takeLatest(FriendActionTypes.ALLOW_REQUEST_FRIEND.INDEX, allowFriendRequest),
  takeLatest(FriendActionTypes.DENY_REQUEST_FRIEND.INDEX, denyFriendRequest),
];
