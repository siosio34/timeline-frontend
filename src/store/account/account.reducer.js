import { AccountActionTypes } from './account.action';

export const initialState = {
  isDuplicatedEmail: false, // 아이디가 중복인지 확인함.
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case AccountActionTypes.CHECK_DUPLICATE_EMAIL.SUCCESS:
      return {
        ...state,
        CHECK_DUPLICATE_EMAIL: action.payload.response.duplicate || false,
      };

    default:
      return state;
  }
};

export default accountReducer;

//
