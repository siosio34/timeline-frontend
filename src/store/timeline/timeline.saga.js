import { call, put, takeLatest } from 'redux-saga/effects';
import { TimelineApi } from 'api';
import { TimelineActionTypes, TimelineActionCreators } from './timeline.action';

export function* getUserTimeline(action) {
  try {
    yield put(TimelineActionCreators.getUserTimeline.request());
    const response = yield call(TimelineApi.getUserTimeline, action.payload);
    yield put(TimelineActionCreators.getUserTimeline.success({ response }));
  } catch (error) {
    yield put(TimelineActionCreators.getUserTimeline.failure(error));
  }
}

export const timelineSagas = [
  takeLatest(TimelineActionTypes.GET_USER_TIMELINE.INDEX, getUserTimeline),
];