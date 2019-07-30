import { createSelector } from 'reselect';
import { initialState } from './timeline.reducer';

const selectTimeline = state => state.timeline || initialState;

const GET_ONCE_LENGTH = 10;

// * 데이터를 더 추가로 가져올 수 있는 로직 판단. *
// 첫 로딩이어서 새로운 데이터가 없는 경우
// 새로 데이터 가져온게 한 페이지만큼 제대로 가져왔을때
const getIsExistTimeline = createSelector(
  selectTimeline,
  timelineState => {
    return (
      (timelineState.events.length === GET_ONCE_LENGTH &&
        timelineState.newEvents.length === 0) ||
      timelineState.newEvents.length === GET_ONCE_LENGTH
    );
  },
);

export default { getIsExistTimeline };
