import { call, put, takeLatest } from 'redux-saga/effects';
import { TimelineApi } from 'api';
import { TimelineActionTypes, TimelineActionCreators } from './timeline.action';

export function* getTimeline(action) {
  try {
    yield put(TimelineActionCreators.getTimeline.request());
    const response = yield call(TimelineApi.getTimeline, action.payload);
    yield put(TimelineActionCreators.getTimeline.success({ response }));
  } catch (error) {
    yield put(TimelineActionCreators.getTimeline.failure(error));
  }
}

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
  takeLatest(TimelineActionTypes.GET_TIMELINE.INDEX, getTimeline),
  takeLatest(TimelineActionTypes.GET_USER_TIMELINE.INDEX, getUserTimeline),
];