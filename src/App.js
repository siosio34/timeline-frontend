import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import history from 'utils/history';
import IntroPage from 'pages/intro';
import RegisterPage from 'pages/register';
import Timeline from 'pages/timeline';
import LoginPage from 'pages/login';
import configureStore from 'store/configureStore';
import { AppHeader, AppContent } from 'layout';

import refreshTokenNotExpired from 'utils/refreshTokenNotExpired';

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
            <Route
              path="/"
              exact
              component={refreshTokenNotExpired() ? Timeline : IntroPage}
            />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </AppContent>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
