import { TimelineActionTypes } from './timeline.action';

export const initialState = {
  events: [],
  newEvents: [],
  page: 0,
};

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case TimelineActionTypes.GET_TIMELINE.INDEX:
      return {
        ...state,
        events: [],
        newEvents: [],
        page: 0,
      };

    case TimelineActionTypes.GET_TIMELINE.SUCCESS:
      return {
        ...state,
        events: action.payload.response.events || [],
      };

    case TimelineActionTypes.GET_USER_TIMELINE.INDEX:
      return {
        ...state,
        events: [],
        newEvents: [],
        page: 0,
      };

    case TimelineActionTypes.GET_USER_TIMELINE.SUCCESS:
      return {
        ...state,
        events: action.payload.response.events || [],
      };

    case TimelineActionTypes.GET_ADD_TIMELINE.SUCCESS:
      return {
        ...state,
        page: state.page + 1,
        events: state.events.concat(action.payload.response.events || []),
        newEvents: action.payload.response.events || [],
      };

    default:
      return state;
  }
};

export default timelineReducer;
