import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createLoadingSelector from 'utils/createLoadingSelector';
import {
  FriendActionCreators, FriendActionTypes,
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

  friendRequestsReceiveLoading: PropTypes.bool.isRequired,
  friendRequestsSendLoading: PropTypes.bool.isRequired,
  recommendFriendsLoading: PropTypes.bool.isRequired,
};

const friendRequestsReceiveLoading = createLoadingSelector([
  FriendActionTypes.GET_FRIEND_RECEIVE.BASE,
]);

const friendRequestsSendLoading = createLoadingSelector([
  FriendActionTypes.GET_REQUESTS_FRIENDS.BASE,
]);

const recommendFriendsLoading = createLoadingSelector([
  FriendActionTypes.GET_RECOMMEND_FRIENDS.BASE,
]);

const mapStateToProps = state => ({
  friendRequestsReceive: state.friend.friendRequestsReceive,
  friendRequestsReceiveLoading: friendRequestsReceiveLoading(state),
  friendRequestsSend: state.friend.friendRequestsSend,
  friendRequestsSendLoading: friendRequestsSendLoading(state),
  recommendFriends: state.friend.recommendFriends,
  recommendFriendsLoading: recommendFriendsLoading(state),
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
