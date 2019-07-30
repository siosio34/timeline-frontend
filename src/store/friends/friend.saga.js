import { call, put, takeLatest } from 'redux-saga/effects';

import { FriendApi } from 'api';
import confirmSaga from 'store/modal/modal.saga';
import { FriendActionTypes, FriendActionCreators } from './friend.action';

export function* getFriends() {
  try {
    yield put(FriendActionCreators.getFriends.request());
    const response = yield call(FriendApi.getFriends);
    yield put(FriendActionCreators.getFriends.success({ response }));
    yield put(FriendActionCreators.handleFriendSearchInputChange(''));
  } catch (error) {
    yield put(FriendActionCreators.getFriends.failure(error));
  }
}

export function* getFriendsReceive() {
  try {
    yield put(FriendActionCreators.getFriendsReceive.request());
    const response = yield call(FriendApi.getFriendsReceive);
    yield put(FriendActionCreators.getFriendsReceive.success({ response }));
  } catch (error) {
    yield put(FriendActionCreators.getFriendsReceive.failure(error));
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

export function* getRecommendFriends() {
  try {
    yield put(FriendActionCreators.getRecommendFriends.request());
    const response = yield call(FriendApi.getRecommendFriends);
    yield put(FriendActionCreators.getRecommendFriends.success({ response }));
  } catch (error) {
    yield put(FriendActionCreators.getRecommendFriends.failure(error));
  }
}

export function* createFriendsRequest(action) {
  try {
    const { email } = action.payload;
    yield put(FriendActionCreators.createFriendsRequest.request());
    const response = yield call(FriendApi.createFriendsRequest, email);
    yield put(FriendActionCreators.createFriendsRequest.success(response));
    yield put(FriendActionCreators.getRecommendFriends());
    yield put(FriendActionCreators.getFriendsRequest());
  } catch (error) {
    yield put(FriendActionCreators.createFriendsRequest.failure(error));
  }
}

export function* cancelFriendsRequest(action) {
  try {
    const confirmed = yield call(confirmSaga, {
      title: '친구신청삭제',
      content: '해당 신청을 정말로 삭제하시겠습니까?',
    });

    if (!confirmed) {
      return;
    }

    const { email } = action.payload;
    yield put(FriendActionCreators.cancelFriendsRequest.request());
    const response = yield call(FriendApi.cancelFriendsRequest, email);
    yield put(FriendActionCreators.cancelFriendsRequest.success(response));
    yield put(FriendActionCreators.getFriendsRequest());
    yield put(FriendActionCreators.getRecommendFriends());
  } catch (error) {
    yield put(FriendActionCreators.cancelFriendsRequest.failure(error));
  }
}

export function* allowFriendRequest(action) {
  try {
    const { email } = action.payload;
    yield put(FriendActionCreators.allowFriendRequest.request());
    const response = yield call(FriendApi.allowFriendRequest, email);
    yield put(FriendActionCreators.allowFriendRequest.success(response));
    yield put(FriendActionCreators.getFriendsReceive());
  } catch (error) {
    yield put(FriendActionCreators.allowFriendRequest.failure(error));
  }
}

export function* denyFriendRequest(action) {
  try {
    const { email } = action.payload;
    yield put(FriendActionCreators.denyFriendRequest.request());
    const response = yield call(FriendApi.denyFriendRequest, email);
    yield put(FriendActionCreators.denyFriendRequest.success(response));
    yield put(FriendActionCreators.getFriendsReceive());
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
  takeLatest(
    FriendActionTypes.CANCEL_REQUEST_FRIEND.INDEX,
    cancelFriendsRequest,
  ),
  takeLatest(FriendActionTypes.GET_FRIEND_RECEIVE.INDEX, getFriendsReceive),
  takeLatest(FriendActionTypes.ALLOW_REQUEST_FRIEND.INDEX, allowFriendRequest),
  takeLatest(FriendActionTypes.DENY_REQUEST_FRIEND.INDEX, denyFriendRequest),
];
