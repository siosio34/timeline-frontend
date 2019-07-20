import { createSelector } from 'reselect';
import { initialState } from './account.reducer';

const selectAccount = state => state.account || initialState;

const accountToken = createSelector(
  selectAccount,
  accountState => accountState.token,
);

const isDuplicateEmail = createSelector(
  selectAccount,
  accountState => accountState.isDuplicateEmail,
);
// eslint-disable-next-line import/prefer-default-export
export default { accountToken, isDuplicateEmail };
