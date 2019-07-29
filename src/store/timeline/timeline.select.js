import { createSelector } from 'reselect';
import { initialState } from './timeline.reducer';

const selectTimeline = state => state.timeline || initialState;

const GET_ONCE_LENGTH = 10;

const getIsExistTimeline = createSelector(
  selectTimeline,
  timelineState => {
    return (
      (timelineState.events.length === GET_ONCE_LENGTH &&
        timelineState.newEvents.length === 0) ||
      timelineState.newEvents.length >= GET_ONCE_LENGTH
    );
  },
);

export default { getIsExistTimeline };
