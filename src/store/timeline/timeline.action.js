import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const TimelineActionTypes = {
  GET_TIMELINE: makeAsyncActionTypes('GET_TIMELINE'),
  GET_USER_TIMELINE: makeAsyncActionTypes('GET_USER_TIMELINE'),
};

export const TimelineActionCreators = {
  getTimeline: makeAsyncActionCreator(TimelineActionTypes.GET_TIMELINE),
  getUserTimeline: makeAsyncActionCreator(TimelineActionTypes.GET_USER_TIMELINE),
};