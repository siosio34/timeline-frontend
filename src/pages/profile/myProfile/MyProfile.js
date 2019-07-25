import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Icon, Button } from 'antd';
import './MyProfile.css';

class MyProfile extends Component {
  render() {
    const { profile } = this.props;
    const { username, email, state, school, birth, imageUrl } = profile;
    return (
      <div className="my-profile">
        <Avatar shape="square" size={200} icon={!imageUrl && 'user'} src={imageUrl} />
        <div className="profile-basic">
          <div className="profile-major">
            <div className="profile-name">{username}</div>
            <div className="profile-id">({email})</div>
          </div>
          {/*<Button type="link" size="small">수정</Button>*/}
        </div>
        <div className="profile-meta">
          <Icon type="environment" />
          <span>{state}</span>
        </div>
        <div className="profile-meta">
          <Icon type="bank" />
          <span>{school}</span>
        </div>
        <div className="profile-meta">
          <Icon type="calendar" />
          <span>{birth}</span>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default MyProfile;