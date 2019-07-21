import { createSelector } from 'reselect';
import { initialState } from './friend.reducer';

const selectFriend = state => state.friend || initialState;
