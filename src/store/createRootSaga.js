import { all } from 'redux-saga/effects';
import { accountSagas } from './account/account.saga';
import { eventSagas } from './event/event.saga';
import { friendSagas } from './friends/friend.saga';
import { profileSagas } from './profile/profile.saga';
import { timelineSagas } from './timeline/timeline.saga';

export default function* rootSaga() {
  yield all([
    ...accountSagas,
    ...eventSagas,
    ...friendSagas,
    ...profileSagas,
    ...timelineSagas,
  ]);
}
