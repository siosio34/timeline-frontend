import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import accountReducer from './account/account.reducer';
import errorReducer from './error/error.reducer';
import friendReducer from './friends/friend.reducer';
import loadingReducer from './loading/loading.reducer';
import profileReducer from './profile/profile.reducer';
import timelineReducer from './timeline/timeline.reducer';

const createRootReducer = history =>
  combineReducers({
    account: accountReducer,
    error: errorReducer,
    friend: friendReducer,
    loading: loadingReducer,
    profile: profileReducer,
    timeline: timelineReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
