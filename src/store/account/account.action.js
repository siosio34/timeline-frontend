import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const AccountActionTypes = {
  SIGNIN: makeAsyncActionTypes('SIGNIN'),
  REGISTER: makeAsyncActionTypes('REGISTER'),
  REFRESH_TOKEN: makeAsyncActionTypes('REFRESH_TOKEN'),
  CHECK_DUPLICATE_EMAIL: makeAsyncActionTypes('CHECK_DUPLICATE_EMAIL'),
};

export const AccountActionCreators = {
  signin: makeAsyncActionCreator(AccountActionTypes.SIGNIN),
  register: makeAsyncActionCreator(AccountActionTypes.REGISTER),
  refreshToken: makeAsyncActionCreator(AccountActionTypes.REFRESH_TOKEN),
  checkDuplicateEmail: makeAsyncActionCreator(
    AccountActionTypes.CHECK_DUPLICATE_EMAIL,
  ),
};
