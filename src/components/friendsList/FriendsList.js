import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd/lib/index';
import './FriendsList.css';

const FriendsList = ({ friends, FriendsButton }) => {
  return (
    <div className="friends-list">
      <List
        dataSource={friends}
        renderItem={friend => {
          const { name, school, id, location, profileImage } = friend;
          return (
            <List.Item key={id}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={profileImage || ''}
                    icon={profileImage ? '' : 'user'}
                  />
                }
                title={name}
                description={`${location} / ${school}`}
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
  FriendsButton: PropTypes.func.isRequired,
};

export default FriendsList;