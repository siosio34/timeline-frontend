import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FriendActionCreators,
} from 'store/friends/friend.action';

import FriendsPageComponent from './FriendsPageComponent';
import './FriendsPage.css';

class FriendsPage extends Component {
  componentDidMount() {
    const {
      getFriendsRequest,
      getFriendsReceive,
      getRecommendFriends,
    } = this.props;

    getFriendsReceive();
    getFriendsRequest();
    getRecommendFriends();
  }

  render() {
    return (
      <FriendsPageComponent {...this.props} />
    );
  }
}

FriendsPage.propTypes = {
  friendRequestsReceive: PropTypes.array.isRequired,
  friendRequestsSend: PropTypes.array.isRequired,
  recommendFriends: PropTypes.array.isRequired,

  getFriendsReceive: PropTypes.func.isRequired,
  getFriendsRequest: PropTypes.func.isRequired,
  getRecommendFriends: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  friendRequestsReceive: state.friend.friendRequestsReceive,
  friendRequestsSend: state.friend.friendRequestsSend,
  recommendFriends: state.friend.recommendFriends,
});

const mapDispatchToProps = dispatch => ({
  getFriends: () => dispatch(FriendActionCreators.getFriends()),
  getFriendsReceive: () => dispatch(FriendActionCreators.getFriendsReceive()),
  getFriendsRequest: () => dispatch(FriendActionCreators.getFriendsRequest()),
  getRecommendFriends: () =>
    dispatch(FriendActionCreators.getRecommendFriends()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendsPage);
