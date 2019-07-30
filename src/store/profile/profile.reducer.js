import { ProfileActionTypes } from './profile.action';

export const initialState = {
  myProfile: {
    email: '',
    username: '',
    state: '',
    school: '',
    birth: '',
    profileImage: {
      thumbUrl: '',
      url: '',
    }
  },
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ProfileActionTypes.GET_MY_PROFILE.SUCCESS:
      return {
        ...state,
        myProfile: action.payload,
      };

    case ProfileActionTypes.EDIT_MY_PROFILE.SUCCESS:
      return {
        ...state,
        myProfile: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;