import { call, put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { EventApi } from 'api';
import { EventActionTypes, EventActionCreators } from './event.action';

export function* registerEvent(action) {
  try {
    yield put(EventActionCreators.registerEvent.request());
    const response = yield call(EventApi.register, action.payload);
    message.success('성공적으로 저장되었습니다.', 1.5);
  } catch (error) {
    yield put(EventActionCreators.registerEvent.failure({ error }));
    message.error('포스트 등록에 실패했습니다.', 1.5);
  }
}

export const eventSagas = [
  takeLatest(EventActionTypes.EVENT_REGISTER.INDEX, registerEvent),
];