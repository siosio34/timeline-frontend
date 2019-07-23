import React from 'react';
import { Switch, Route } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IntroPage from 'pages/intro';
import RegisterPage from 'pages/register';
import Timeline from 'pages/timeline';
import FriendsPage from 'pages/friends';
import LoginPage from 'pages/login';
import ProfilePage from 'pages/profile';

function RouteComponent({ isLoggedIn }) {
  return (
    <Switch>
      <Route path="/" exact component={isLoggedIn ? Timeline : IntroPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/friends" component={FriendsPage} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  );
}

RouteComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.account.isLoggedIn,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RouteComponent);
