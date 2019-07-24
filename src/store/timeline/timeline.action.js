import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const TimelineActionTypes = {
  GET_USER_TIMELINE: makeAsyncActionTypes('GET_USER_TIMELINE'),
};

export const TimelineActionCreators = {
  getUserTimeline: makeAsyncActionCreator(TimelineActionTypes.GET_USER_TIMELINE),
};