import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const EventActionTypes = {
  EVENT_REGISTER: makeAsyncActionTypes('EVENT_REGISTER'),
  EVENT_DELETE: makeAsyncActionTypes('EVENT_DELETE'),
};

export const EventActionCreators = {
  registerEvent: makeAsyncActionCreator(EventActionTypes.EVENT_REGISTER),
  deleteEvent: makeAsyncActionCreator(EventActionTypes.EVENT_DELETE),
};
