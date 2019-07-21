import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FriendsList } from 'components';
import {
  FriendActionTypes,
  FriendActionCreators,
} from 'store/friends/friend.action';
import FriendSelector from 'store/friends/friend.select';
import RecommendFriendsButton from './recommendFriendsButton';
import RequestFriendsButton from './requestFriendsButton';
import './FriendsPage.css';

class FriendsPage extends Component {
  componentDidMount() {
    const { getRecommendFriends, getFriendsRequest } = this.props;

    getFriendsRequest();
    getRecommendFriends();
  }

  render() {
    const { friendRequests, recommendFriends } = this.props;
    return (
      <div className="friends-page ant-row">
        <div className="ant-col ant-col-12">
          <h2>대기중인 친구신청</h2>
          <div className="friends-list-col">
            <FriendsList
              friends={friendRequests}
              FriendsButton={RequestFriendsButton}
            />
          </div>
        </div>
        <div className="ant-col ant-col-12">
          <h2>추천친구</h2>
          <div className="friends-list-col">
            <FriendsList
              friends={recommendFriends}
              FriendsButton={RecommendFriendsButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

FriendsPage.propTypes = {
  getRecommendFriends: PropTypes.func.isRequired,
  getFriendsRequest: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  friendRequests: state.friend.friendRequests,
  recommendFriends: state.friend.recommendFriends,
});

const mapDispatchToProps = dispatch => ({
  getRecommendFriends: () =>
    dispatch(FriendActionCreators.getRecommendFriends()),
  getFriendsRequest: () => dispatch(FriendActionCreators.getFriendsRequest()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(FriendsPage);
