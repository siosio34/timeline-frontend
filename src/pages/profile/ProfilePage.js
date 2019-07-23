import React, { Component } from 'react';
import MyProfile from './myProfile';

class ProfilePage extends Component {
  render() {
    return (
      <div className="ant-row">
        <div className="ant-col ant-col-8">
          <MyProfile />
        </div>
        <div className="ant-col ant-col-16">내가 쓴 게시글 목록</div>
      </div>
    );
  }
};

export default ProfilePage;