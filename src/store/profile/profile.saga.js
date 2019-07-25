import { call, put, takeLatest } from 'redux-saga/effects';

import { ProfileApi } from 'api';
import { ProfileActionTypes, ProfileActionCreators } from './profile.action';

export function* getMyProfile() {
  try {
    yield put(ProfileActionCreators.getMyProfile.request());
    const response = yield call(ProfileApi.getMyProfile);
    yield put(ProfileActionCreators.getMyProfile.success(response));
  } catch (error) {
    yield put(ProfileActionCreators.getMyProfile.failure(error));
  }
}

export const profileSagas = [
  takeLatest(ProfileActionTypes.GET_MY_PROFILE.INDEX, getMyProfile),
];