import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from 'utils/history';

import configureStore from 'store/configureStore';
import { AppHeader, AppContent } from 'layout';
import RouteComponent from './routes';

import './App.css';
import 'antd/dist/antd.css';

const initialState = {};
const store = configureStore(initialState, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppHeader />
        <AppContent className="app-content">
          <RouteComponent />
        </AppContent>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
