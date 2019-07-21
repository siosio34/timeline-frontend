import React, { Component } from 'react';
import FriendsList from './friendsList';
import './FriendsPage.css';

const friends = [
  { id: 1, name: '홍길동', location: '서울', school: '경희대학교', profileImage: '' },
  { id: 2, name: '김철수', location: '경기', school: '경희대학교', profileImage: '' },
  { id: 3, name: '박길동', location: '서울', school: '경희대학교', profileImage: '' },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '' },
];

const noFriends = [
  { id: 1, name: '홍길동', location: '서울', school: '경희대학교', profileImage: '', requested: false },
  { id: 2, name: '김철수', location: '경기', school: '경희대학교', profileImage: '', requested: true },
  { id: 3, name: '박길동', location: '서울', school: '경희대학교', profileImage: '', requested: false },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: false },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: false },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: true },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: true },
  { id: 4, name: '이길동', location: '인천', school: '경희대학교', profileImage: '', requested: false },
];

class FriendsPage extends Component {
  render() {
    return (
      <div className="friends-page ant-row">
        <div className="ant-col ant-col-12">
          <h2>대기중인 친구신청</h2>
          <FriendsList
            friends={friends}
            isRecommend={false}
          />
        </div>
        <div className="ant-col ant-col-12">
          <h2>추천친구</h2>
          <FriendsList
            friends={noFriends}
            isRecommend
          />
        </div>
      </div>
    );
  }
}

export default FriendsPage;