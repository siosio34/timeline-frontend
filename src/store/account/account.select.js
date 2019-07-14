import { createSelector } from 'reselect';
import { initialState } from './account.reducer';

const selectAccount = state => state.account || initialState;

const accountToken = createSelector(
  selectAccount,
  accountState => accountState.token,
);

// eslint-disable-next-line import/prefer-default-export
export { accountToken };
