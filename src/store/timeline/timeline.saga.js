import { call, put, takeLatest, select, delay } from 'redux-saga/effects';
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

export function* getAddTimeline() {
  try {
    yield delay(100);
    yield put(TimelineActionCreators.getAddTimeline.request());
    const page = yield select(state => state.timeline.page + 1 || 0);
    const response = yield call(TimelineApi.getTimeline, { page });
    yield put(TimelineActionCreators.getAddTimeline.success({ response }));
  } catch (error) {
    yield put(TimelineActionCreators.getAddTimeline.failure(error));
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
  takeLatest(TimelineActionTypes.GET_ADD_TIMELINE.INDEX, getAddTimeline),
  takeLatest(TimelineActionTypes.GET_USER_TIMELINE.INDEX, getUserTimeline),
];
