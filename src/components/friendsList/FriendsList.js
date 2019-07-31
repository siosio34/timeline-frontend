import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import FriendsEmpty from './friendsEmpty';
import FriendsLoading from './friendsLoading';
import './FriendsList.css';

const paginationOption = {
  pageSize: 15,
  size: 'small',
  simple: 'true',
};

const FriendsList = ({ friends, FriendsButton, emptyMessage, loading }) => {
  if (loading) {
    return <FriendsLoading />;
  }
  if (!friends.length) {
    return <FriendsEmpty message={emptyMessage} />;
  }
  return (
    <div className="friends-list">
      <List
        pagination={paginationOption}
        dataSource={friends}
        renderItem={friend => {
          const { username, school, id, state, profileImage } = friend;
          return (
            <List.Item key={id}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={profileImage ? profileImage.thumbUrl : ''}
                    icon={(profileImage && profileImage.thumbUrl) ? '' : 'user'}
                  />
                }
                title={username}
                description={`${state} / ${school}`}
              />
              <div className="friends-button">
                <FriendsButton friendInfo={friend} />
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

FriendsList.defaultProps = {
  friends: [],
  emptyMessage: '',
};

FriendsList.propTypes = {
  friends: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  emptyMessage: PropTypes.string,
  FriendsButton: PropTypes.object.isRequired,
};

export default FriendsList;
