const INDEX = 'INDEX';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function makeAsyncActionTypes(base) {
  const asyncActionTypes = [INDEX, REQUEST, SUCCESS, FAILURE].reduce(
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {},
  );

  asyncActionTypes.BASE = base;
  return asyncActionTypes;
}

export function makeActionCreator(actionType) {
  return payload => ({ type: actionType, payload });
}

export function makeAsyncActionCreator(action) {
  const actionCreator = makeActionCreator(action.INDEX);
  actionCreator.request = makeActionCreator(action.REQUEST);
  actionCreator.success = makeActionCreator(action.SUCCESS);
  actionCreator.failure = makeActionCreator(action.FAILURE);
  return actionCreator;
}
