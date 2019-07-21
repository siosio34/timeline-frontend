import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loadingReducer from './loading/loading.reducer';
import errorReducer from './error/error.reducer';
import accountReducer from './account/account.reducer';
import friendReducer from './friends/friend.reducer';

const createRootReducer = history =>
  combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    account: accountReducer,
    friend: friendReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
