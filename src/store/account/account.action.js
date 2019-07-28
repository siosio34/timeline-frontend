import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const AccountActionTypes = {
  LOGIN: makeAsyncActionTypes('LOGIN'),
  LOGOUT: makeAsyncActionTypes('LOGOUT'),
  REGISTER: makeAsyncActionTypes('REGISTER'),
  REFRESH_TOKEN: makeAsyncActionTypes('REFRESH_TOKEN'),
  CHECK_DUPLICATE_EMAIL: makeAsyncActionTypes('CHECK_DUPLICATE_EMAIL'),
};

export const AccountActionCreators = {
  login: makeAsyncActionCreator(AccountActionTypes.LOGIN),
  logout: makeAsyncActionCreator(AccountActionTypes.LOGOUT),
  register: makeAsyncActionCreator(AccountActionTypes.REGISTER),
  refreshToken: makeAsyncActionCreator(AccountActionTypes.REFRESH_TOKEN),
  checkDuplicateEmail: makeAsyncActionCreator(
    AccountActionTypes.CHECK_DUPLICATE_EMAIL,
  ),
};
