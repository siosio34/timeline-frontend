import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import { FriendsList } from 'components';

const myFriends = [
  { id: 1, name: '홍길동', location: '서울', school: '경희대학교', profileImage: '', requested: false },
  { id: 2, name: '김철수', location: '경기', school: '경희대학교', profileImage: '', requested: true },
  { id: 3, name: '박길동', location: '서울', school: '경희대학교', profileImage: '', requested: false },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: false },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: false },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: true },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: true },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: false },
];

class MyFriendsList extends Component {
  render() {
    return (
      <div>
        <h3>내 친구목록</h3>
        <div className="ant-row">
          <Input
            className="ant-col ant-col-20"
            placeholder="내 친구 검색하기"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <Button style={{ marginLeft: '5px'}} type="primary" shape="circle" icon="search" />
        </div>
        <FriendsList
          friends={myFriends}
          type="myFriends"
        />
      </div>
    );
  }
}

export default MyFriendsList;