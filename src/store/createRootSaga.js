import { all } from 'redux-saga/effects';
import { accountSagas } from './account/account.saga';
import { eventSagas } from './event/event.saga';
import { friendSagas } from './friends/friend.saga';

export default function* rootSaga() {
  yield all([...accountSagas, ...eventSagas, ...friendSagas]);
}
