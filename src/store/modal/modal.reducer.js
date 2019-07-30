import { ModalActionTypes } from './modal.action';

export const initialState = {
  isShow: false,
  title: '',
  content: '',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ModalActionTypes.SHOW_CONFIRM_MODAL:
      return {
        ...state,
        isShow: true,
        title: action.payload.title,
        content: action.payload.content,
      };

    case ModalActionTypes.HIDE_CONFIRM_MODAL:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default modalReducer;
