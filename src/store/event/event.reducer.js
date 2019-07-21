import { EventActionTypes } from './event.action';

export const initialState = {

};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventActionTypes.EVENT_REGISTER:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default eventReducer;
