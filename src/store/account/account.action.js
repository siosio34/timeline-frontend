import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const AccountActionTypes = {
  LOGIN: makeAsyncActionTypes('LOGIN'),
  REGISTER: makeAsyncActionTypes('REGISTER'),
  REFRESH_TOKEN: makeAsyncActionTypes('REFRESH_TOKEN'),
  CHECK_DUPLICATE_EMAIL: makeAsyncActionTypes('CHECK_DUPLICATE_EMAIL'),
};

export const AccountActionCreators = {
  login: makeAsyncActionCreator(AccountActionTypes.LOGIN),
  register: makeAsyncActionCreator(AccountActionTypes.REGISTER),
  refreshToken: makeAsyncActionCreator(AccountActionTypes.REFRESH_TOKEN),
  checkDuplicateEmail: makeAsyncActionCreator(
    AccountActionTypes.CHECK_DUPLICATE_EMAIL,
  ),
};
