import { take, put, race } from 'redux-saga/effects';
import { ModalActionTypes, ModalActionCreators } from './modal.action';

export default function* confirmSaga({ title = '', content = '' }) {
  yield put(ModalActionCreators.showConfirmModal({ title, content }));

  const { yes } = yield race({
    yes: take(ModalActionTypes.CONFIRM_OK),
    no: take(ModalActionTypes.CONFIRM_CANCEL),
  });

  yield put(ModalActionCreators.hideConfirmModal());
  return !!yes;
}
