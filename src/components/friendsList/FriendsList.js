import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import FriendsEmpty from './friendsEmpty';
import './FriendsList.css';

const FriendsList = ({ friends, FriendsButton }) => {
  if (!friends.length) {
    return <FriendsEmpty />;
  }

  return (
    <div className="friends-list">
      <List
        dataSource={friends}
        renderItem={friend => {
          const { username, school, id, state, profileImage } = friend;
          return (
            <List.Item key={id}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={profileImage || ''}
                    icon={profileImage ? '' : 'user'}
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
};

FriendsList.propTypes = {
  friends: PropTypes.array,
  FriendsButton: PropTypes.object.isRequired,
};

export default FriendsList;
