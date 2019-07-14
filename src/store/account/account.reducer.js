import { AccountActionTypes } from './account.action';

export const initialState = {
  token: {},
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionTypes.SIGNIN.SUCCESS:
      return {
        ...state,
        token: action.payload.response.token || {},
      };

    case AccountActionTypes.SIGNUP.SUCCESS:
      return {
        ...state,
        token: action.payload.response.token || {},
      };

    case AccountActionTypes.REFRESH_TOKEN.SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default accountReducer;
