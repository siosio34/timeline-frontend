import { AccountActionTypes } from './account.action';

export const initialState = {
  token: {},
  isLogin: false,
  isDuplicatedEmail: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionTypes.SIGNIN.SUCCESS:
      return {
        ...state,
        token: action.payload.response.token || {},
        isLogin: true,
      };

    case AccountActionTypes.REGISTER.SUCCESS:
      return {
        ...state,
        token: action.payload.response.token || {},
      };

    case AccountActionTypes.REFRESH_TOKEN.SUCCESS:
      return {
        ...state,
      };

    case AccountActionTypes.CHECK_DUPLICATE_EMAIL.SUCCESS:
      return {
        ...state,
        isDuplicatedEmail: action.payload.response.duplicate || false,
      };
    default:
      return state;
  }
};

export default accountReducer;
