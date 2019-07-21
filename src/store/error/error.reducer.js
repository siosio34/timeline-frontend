import { message } from 'antd';

const errorReducer = (state = {}, action) => {
  const { type, payload } = action;
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  if (!matches) return state;

  const [, requestName, requestState] = matches;

  if (requestState === 'FAILURE') {
    message.error(payload.message);
  }

  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? payload.message : '',
  };
};

export default errorReducer;
