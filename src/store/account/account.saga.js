import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { AccountApi } from 'api';
import { AccountActionTypes, AccountActionCreators } from './account.action';

export function* login(action) {
  try {
    yield put(AccountActionCreators.login.request());
    const response = yield call(AccountApi.login, action.payload);
    const { access_token, refresh_token } = response;
    window.localStorage.setItem('access_token', access_token);
    window.localStorage.setItem('refresh_token', refresh_token);
    yield put(push('/'));
    yield put(AccountActionCreators.login.success({ response }));
  } catch (error) {
    yield put(AccountActionCreators.login.failure({ error }));
  }
}

export function* register(action) {
  try {
    yield put(AccountActionCreators.register.request());
    const response = yield call(AccountApi.register, action.payload);
    const { access_token, refresh_token } = response;
    window.localStorage.setItem('access_token', access_token);
    window.localStorage.setItem('refresh_token', refresh_token);
    yield put(push('/'));
    yield put(AccountActionCreators.register.success({ response }));
  } catch (error) {
    yield put(AccountActionCreators.register.failure({ error }));
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

export function* checkDuplicateEmail(action) {
  try {
    yield put(AccountActionCreators.checkDuplicateEmail.request());
    const response = yield call(AccountApi.checkDuplicateEmail, action.payload);
    yield put(AccountActionCreators.checkDuplicateEmail.success({ response }));
  } catch (error) {
    yield put(AccountActionCreators.checkDuplicateEmail.failure(error));
  }
}

export const accountSagas = [
  takeLatest(AccountActionTypes.LOGIN.INDEX, login),
  takeLatest(AccountActionTypes.REGISTER.INDEX, register),
  takeLatest(AccountActionTypes.REFRESH_TOKEN.INDEX, refreshToken),
  takeLatest(
    AccountActionTypes.CHECK_DUPLICATE_EMAIL.INDEX,
    checkDuplicateEmail,
  ),
];
