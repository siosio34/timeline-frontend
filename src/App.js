import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from 'utils/history';

import configureStore from 'store/configureStore';
import { AppTitle, AppHeader, AppContent } from 'layout';
import { PersistGate } from 'redux-persist/integration/react';

import RouteComponent from './routes';

import './App.css';
import 'antd/dist/antd.css';

const initialState = {};
const { store, persistor } = configureStore(initialState, history);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <AppTitle />
          <AppHeader />
          <AppContent className="app-content">
            <RouteComponent />
          </AppContent>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
