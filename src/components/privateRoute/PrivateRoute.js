import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import refreshTokenNotExpired from 'utils/refreshTokenNotExpired';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      refreshTokenNotExpired() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
