import refreshTokenExpired from 'utils/refreshTokenExpired';
import { AccountActionTypes } from './account.action';

export const initialState = {
  isLoggedIn: !refreshTokenExpired(),
  isCheckDuplicate: false,
  email: '',
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
      };
    case AccountActionTypes.LOGOUT.SUCCESS:
      return {
        ...initialState,
        isLoggedIn: false,
      };
    case AccountActionTypes.REGISTER.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
      };
    case AccountActionTypes.CHECK_DUPLICATE_EMAIL.SUCCESS:
      return {
        ...state,
        isCheckDuplicate: true,
      };

    default:
      return state;
  }
};

export default accountReducer;
