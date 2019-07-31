import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Tabs } from 'antd';
import { FriendsList, MyFriendsList } from 'components';
import ReceiveFriendButton from './receiveFriendsButton';
import RequestFriendsButton from './requestFriendsButton';
import RecommendFriendsButton from './recommendFriendsButton';

const { TabPane } = Tabs;

const TabIcon = ({ icon, title }) => {
  return (
    <span>
      <Icon type={icon} />
      {title}
    </span>
  );
};

const FriendsPageComponent = (props) => {
  const {
    friendRequestsReceive,
    friendRequestsSend,
    recommendFriends,
    friendRequestsReceiveLoading,
    friendRequestsSendLoading,
    recommendFriendsLoading,
  } = props;

  return (
    <div className="friends-page ant-row">
      <div className="ant-col ant-col-12">
        <h2>대기중인 친구신청</h2>
        <Tabs>
          <TabPane tab={<TabIcon icon="user-add" title="받은 신청" />} key="1">
            <div className="friends-list-col">
              <FriendsList
                friends={friendRequestsReceive}
                FriendsButton={ReceiveFriendButton}
                loading={friendRequestsReceiveLoading}
              />
            </div>
          </TabPane>
          <TabPane tab={<TabIcon icon="user" title="보낸 신청" />} key="2">
            <div className="friends-list-col">
              <FriendsList
                friends={friendRequestsSend}
                FriendsButton={RequestFriendsButton}
                loading={friendRequestsSendLoading}
              />
            </div>
          </TabPane>
          <TabPane tab={<TabIcon icon="user" title="추천 친구" />} key="3">
            <div className="friends-list-col">
              <FriendsList
                friends={recommendFriends}
                FriendsButton={RecommendFriendsButton}
                loading={recommendFriendsLoading}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
      <div className="ant-col ant-col-12">
        <h2>내 친구 목록</h2>
        <div className="friends-list-col">
          <MyFriendsList />
        </div>
      </div>
    </div>
  );
};

TabIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

FriendsPageComponent.propTypes = {
  friendRequestsReceive: PropTypes.array.isRequired,
  friendRequestsSend: PropTypes.array.isRequired,
  recommendFriends: PropTypes.array.isRequired,
  friendRequestsReceiveLoading: PropTypes.bool.isRequired,
  friendRequestsSendLoading: PropTypes.bool.isRequired,
  recommendFriendsLoading: PropTypes.bool.isRequired,
};

export default FriendsPageComponent;