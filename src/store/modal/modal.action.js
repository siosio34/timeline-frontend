import { makeActionCreator } from 'utils/actionHelper';

export const ModalActionTypes = {
  SHOW_CONFIRM_MODAL: 'SHOW_CONFIRM_MODAL',
  HIDE_CONFIRM_MODAL: 'HIDE_CONFIRM_MODAL',
  CONFIRM_OK: 'CONFIRM_OK',
  CONFIRM_CANCEL: 'CONFIRM_CANCEL',
};

export const ModalActionCreators = {
  showConfirmModal: makeActionCreator(ModalActionTypes.SHOW_CONFIRM_MODAL),
  hideConfirmModal: makeActionCreator(ModalActionTypes.HIDE_CONFIRM_MODAL),
  confirmOK: makeActionCreator(ModalActionTypes.CONFIRM_OK),
  confirmCancel: makeActionCreator(ModalActionTypes.CONFIRM_CANCEL),
};
