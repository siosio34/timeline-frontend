import { all } from 'redux-saga/effects';
import { accountSagas } from './account/account.saga';

export default function* rootSaga() {
  yield all([...accountSagas]);
}
