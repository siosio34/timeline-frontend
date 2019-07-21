import {
  makeAsyncActionTypes,
  makeAsyncActionCreator,
} from 'utils/actionHelper';

export const EventActionTypes = {
  EVENT_REGISTER: makeAsyncActionTypes('EVENT_REGISTER')
};

export const EventActionCreators = {
  registerEvent: makeAsyncActionCreator(EventActionTypes.EVENT_REGISTER),
};