import { call, put, takeLatest, select } from 'redux-saga/effects';

import { EventApi } from 'api';
import { TimelineActionCreators } from 'store/timeline/timeline.action';
import confirmSaga from 'store/modal/modal.saga';
import { EventActionTypes, EventActionCreators } from './event.action';

export function* registerEvent(action) {
  const { eventData, resetForm } = action.payload;
  try {
    yield put(EventActionCreators.registerEvent.request());
    yield call(EventApi.register, eventData);
    const userId = yield select(state => state.account.email);
    yield put(EventActionCreators.registerEvent.success());
    yield call(resetForm);
    yield put(TimelineActionCreators.getTimeline({}));
    yield put(TimelineActionCreators.getUserTimeline({ email: userId }));
  } catch (error) {
    yield put(EventActionCreators.registerEvent.failure({ error }));
  }
}

export function* deleteEvent(action) {
  try {
    const confirmed = yield call(confirmSaga, {
      title: '이벤트 삭제',
      content: '해당 이벤트를 타임라인에서 삭제하시겠습니까?',
    });

    if (!confirmed) {
      return;
    }

    yield put(EventActionCreators.deleteEvent.request());
    yield call(EventApi.deleteEvent, action.payload);
  } catch (error) {
    yield put(EventActionCreators.deleteEvent.failure({ error }));
  }
}

export const eventSagas = [
  takeLatest(EventActionTypes.EVENT_REGISTER.INDEX, registerEvent),
  takeLatest(EventActionTypes.EVENT_DELETE.INDEX, deleteEvent),
];
