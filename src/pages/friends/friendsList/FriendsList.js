import React from 'react';
import { List, Avatar, Button } from 'antd';
import './FriendsList.css';

const FriendsList = ({ friends, isRecommend }) => {
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
                  <Avatar src={profileImage || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}/>
                }
                title={name}
                description={`${location} / ${school}`}
              />
              <div className="friends-button">
                {!isRecommend ? (
                  <>
                    <Button size="small" style={{marginRight: '2px'}} type="primary" ghost>친구수락</Button>
                    <Button size="small" type="danger" ghost>친구거절</Button>
                  </>
                ) : (
                  <Button size="small" type={requested ? 'default' : 'dashed'}>{requested ? '친구신청' : '요청 중'}</Button>
                )}
              </div>
            </List.Item>
          );
        }}
      />
    </div>
  );
};

export default FriendsList;