import React, { Component } from 'react';
import { Avatar, Icon, Button } from 'antd';
import './MyProfile.css';

class MyProfile extends Component {
  render() {
    return (
      <div className="my-profile">
        <Avatar shape="square" size={200} icon="user" />
        <div className="profile-basic">
          <div className="profile-major">
            <div className="profile-name">홍길동</div>
            <div className="profile-id">(user123)</div>
          </div>
          {/*<Button type="link" size="small">수정</Button>*/}
        </div>
        <div className="profile-meta">
          <Icon type="environment" />
          <span>서울</span>
        </div>
        <div className="profile-meta">
          <Icon type="bank" />
          <span>경희대학교</span>
        </div>
      </div>
    );
  }
}

export default MyProfile;