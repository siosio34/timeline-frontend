import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import history from 'utils/history';
import SignUpPage from 'pages/signup';
import SignInPage from 'pages/signin';
import configureStore from 'store/configureStore';
import { AppHeader, AppContent } from 'layout';

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
          <Switch>
            <Route path="/join" component={SignUpPage} />
            <Route path="/login" component={SignInPage} />
          </Switch>
        </AppContent>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
