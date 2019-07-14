import { call, put, takeLatest } from 'redux-saga/effects';

import { AccountApi } from 'api';
import { AccountActionTypes, AccountActionCreators } from './account.action';

export function* signin(action) {
  try {
    yield put(AccountActionCreators.signin.request());
    const response = yield call(AccountApi.signin, action.payload);
    yield put(AccountActionCreators.signin.success({ response }));
  } catch (error) {
    yield put(AccountActionCreators.signin.failure({ error }));
  }
}

export function* signup(action) {
  try {
    yield put(AccountActionCreators.signup.request());
    const response = yield call(AccountApi.signup, action.payload);
    yield put(AccountActionCreators.signup.success({ response }));
  } catch (error) {
    yield put(AccountActionCreators.signup.failure({ error }));
  }
}

export function* refreshToken() {
  try {
    const tokenForRefresh = window.localStorage.getItem('refreshToken');
    yield put(AccountActionCreators.refreshToken.request());
    const response = yield call(AccountApi.refreshToken, tokenForRefresh);
    yield put(AccountActionCreators.refreshToken.success({ response }));
  } catch (error) {
    yield put(AccountActionCreators.refreshToken.failure({ error }));
  }
}

export const accountSagas = [
  takeLatest(AccountActionTypes.SIGNIN.INDEX, signin),
  takeLatest(AccountActionTypes.SIGNUP.INDEX, signup),
  takeLatest(AccountActionTypes.REFRESH_TOKEN.INDEX, refreshToken),
];
