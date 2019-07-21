import React from 'react';
import { List, Avatar, Button } from 'antd/lib/index';
import './FriendsList.css';

const requestButton = () => (
  <>
    <Button size="small" style={{marginRight: '2px'}} type="primary" ghost>수락</Button>
    <Button size="small" type="danger" ghost>거절</Button>
  </>
);
const recommendButton = requested => (
  <Button size="small" type={requested ? 'default' : 'dashed'}>{requested ? '친구신청' : '요청 중'}</Button>
);
const myFriendButton = () => (
  <Button size="small" type="link" className="myfriends-delete">삭제</Button>
);

const FriendsList = ({ friends, type }) => {
  return (
    <div className="friends-list">
      <List
        dataSource={friends}
        renderItem={friend => {
          const { name, school, id, location, profileImage, requested } = friend;
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
                {type === 'request' && requestButton()}
                {type === 'recommend' && recommendButton(requested)}
                {type === 'myFriends' && myFriendButton()}
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default FriendsList;