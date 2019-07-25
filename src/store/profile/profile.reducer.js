import { ProfileActionTypes } from './profile.action';

export const initialState = {
  myProfile: {},
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ProfileActionTypes.GET_MY_PROFILE.INDEX:
      return {
        ...state,
        myProfile: {},
      };

    case ProfileActionTypes.GET_MY_PROFILE.SUCCESS:
      return {
        ...state,
        myProfile: action.payload.user,
      };

    default:
      return state;
  }
};

export default profileReducer;