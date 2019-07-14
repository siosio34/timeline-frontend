import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const AccountActionTypes = {
  SIGNIN: makeAsyncActionTypes('SIGNIN'),
  SIGNUP: makeAsyncActionTypes('SIGNUP'),
  REFRESH_TOKEN: makeAsyncActionTypes('REFRESH_TOKEN'),
};

export const AccountActionCreators = {
  signin: makeAsyncActionCreator(AccountActionTypes.SIGNIN),
  signup: makeAsyncActionCreator(AccountActionTypes.SIGNUP),
  refreshToken: makeAsyncActionCreator(AccountActionTypes.REFRESH_TOKEN),
};
