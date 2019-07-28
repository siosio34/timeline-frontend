import refreshTokenExpired from 'utils/refreshTokenExpired';
import { AccountActionTypes } from './account.action';

export const initialState = {
  isLoggedIn: !refreshTokenExpired(),
  isCheckDuplicate: false, // 아이디가 중복인지 확인함.
  userInfo: {
    email: '',
  },
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.payload.userInfo,
      };
    case AccountActionTypes.LOGOUT.SUCCESS:
      return {
        ...initialState,
      };
    case AccountActionTypes.REGISTER.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
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
