import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const ProfileActionTypes = {
  GET_MY_PROFILE: makeAsyncActionTypes('GET_MY_PROFILE'),
};

export const ProfileActionCreators = {
  getMyProfile: makeAsyncActionCreator(ProfileActionTypes.GET_MY_PROFILE),
};