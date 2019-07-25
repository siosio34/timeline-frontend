import { TimelineActionTypes } from './timeline.action';

export const initialState = {
  events: [],
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case TimelineActionTypes.GET_USER_TIMELINE.INDEX:
      return {
        ...state,
        events: [],
      };

    case TimelineActionTypes.GET_USER_TIMELINE.SUCCESS:
      return {
        ...state,
        events: action.payload.response.events,
      };

    default:
      return state;
  }
};

export default timelineReducer;