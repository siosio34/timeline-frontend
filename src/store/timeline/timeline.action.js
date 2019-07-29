import {
  makeActionCreator,
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const TimelineActionTypes = {
  GET_TIMELINE: makeAsyncActionTypes('GET_TIMELINE'),
  GET_ADD_TIMELINE: makeAsyncActionTypes('GET_ADD_TIMELINE'),
  GET_USER_TIMELINE: makeAsyncActionTypes('GET_USER_TIMELINE'),
  END_EXIST_TIMELINE: 'END_EXIST_TIMELINE',
};

export const TimelineActionCreators = {
  getTimeline: makeAsyncActionCreator(TimelineActionTypes.GET_TIMELINE),
  getAddTimeline: makeAsyncActionCreator(TimelineActionTypes.GET_ADD_TIMELINE),
  getUserTimeline: makeAsyncActionCreator(
    TimelineActionTypes.GET_USER_TIMELINE,
  ),
  endExistTimeline: makeActionCreator(TimelineActionTypes.END_EXIST_TIMELINE),
};
