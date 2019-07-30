import { call, put, takeLatest, select } from 'redux-saga/effects';
import { message } from 'antd';

import { EventApi } from 'api';
import { TimelineActionCreators } from 'store/timeline/timeline.action';
import confirmSaga from 'store/modal/modal.saga';
import { EventActionTypes, EventActionCreators } from './event.action';

export function* registerEvent(action) {
  try {
    yield put(EventActionCreators.registerEvent.request());
    const response = yield call(EventApi.register, action.payload);
    const userId = yield select(state => state.account.userInfo.email);
    yield put(TimelineActionCreators.getTimeline({}));
    yield put(TimelineActionCreators.getUserTimeline({ email: userId }));
    message.success('성공적으로 저장되었습니다.', 1.5);
  } catch (error) {
    yield put(EventActionCreators.registerEvent.failure({ error }));
    message.error('포스트 등록에 실패했습니다.', 1.5);
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
    message.success('포스트가 삭제되었습니다.', 1.5);
  } catch (error) {
    yield put(EventActionCreators.deleteEvent.failure({ error }));
    message.error('포스트를 삭제하지 못했습니다.\n다시 시도해주세요.', 1.5);
  }
}

export const eventSagas = [
  takeLatest(EventActionTypes.EVENT_REGISTER.INDEX, registerEvent),
  takeLatest(EventActionTypes.EVENT_DELETE.INDEX, deleteEvent),
];
