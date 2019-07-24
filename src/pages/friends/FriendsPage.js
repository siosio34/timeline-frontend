import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FriendsList } from 'components';
import { Tabs, Icon } from 'antd';
import {
  FriendActionTypes,
  FriendActionCreators,
} from 'store/friends/friend.action';
import FriendSelector from 'store/friends/friend.select';
import RecommendFriendsButton from './recommendFriendsButton';
import RequestFriendsButton from './requestFriendsButton';
import './FriendsPage.css';

const { TabPane } = Tabs;

class FriendsPage extends Component {
  componentDidMount() {
    const { getRecommendFriends, getFriendsRequest } = this.props;

    getFriendsRequest();
    getRecommendFriends();
  }

  render() {
    const { friendRequestsReceive, friendRequestsSend, recommendFriends } = this.props;
    return (
      <div className="friends-page ant-row">
        <div className="ant-col ant-col-12">
          <h2>대기중인 친구신청</h2>
          <Tabs>
            <TabPane tab={<span><Icon type="user-add" />받은 신청</span>} key="1">
              <div className="friends-list-col">
                <FriendsList
                  friends={friendRequestsReceive}
                  FriendsButton={RecommendFriendsButton}
                />
              </div>
            </TabPane>
            <TabPane tab={<span><Icon type="user" />보낸 신청</span>} key="2">
              <div className="friends-list-col">
                <FriendsList
                  friends={friendRequestsSend}
                  FriendsButton={RequestFriendsButton}
                />
              </div>
            </TabPane>
            <TabPane tab={<span><Icon type="user" />추천 친구</span>} key="3">
              <div className="friends-list-col">
                <FriendsList
                  friends={recommendFriends}
                  FriendsButton={RecommendFriendsButton}
                />
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className="ant-col ant-col-12">
          <h2>내 친구</h2>
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
  friendRequestsReceive: PropTypes.object.isRequired,
  friendRequestsSend: PropTypes.func.isRequired,
  recommendFriends: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  friendRequestsReceive: state.friend.friendRequests,
  friendRequestsSend: state.friend.friendRequests,
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
