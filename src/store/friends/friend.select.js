import { createSelector } from 'reselect';
import { initialState } from './friend.reducer';

const selectFriend = state => state.friend || initialState;

const getSearchedFriends = createSelector(
  selectFriend,
  friendState =>
    friendState.friends.filter(item =>
      item.username.includes(friendState.friendSearchInputText),
    ),
);

export default { getSearchedFriends };
