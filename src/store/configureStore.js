import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

import createRootSaga from './createRootSaga';
import createRootReducer from './createRootReducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

export default (initialState, history) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  /* eslint-enable */

  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history),
  );

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers),
  );
  const persistor = persistStore(store);

  // Extensions
  sagaMiddleware.run(createRootSaga);

  return {
    store,
    persistor,
  };
};
