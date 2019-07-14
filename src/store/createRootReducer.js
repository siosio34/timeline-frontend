import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loadingReducer from './loading/loading.reducer';
import errorReducer from './error/error.reducer';
import accountReducer from './account/account.reducer';

const createRootReducer = history =>
  combineReducers({
    loading: loadingReducer,
    error: errorReducer,
    account: accountReducer,
    router: connectRouter(history),
  });

export default createRootReducer;
