import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Icon, Button } from 'antd';
import './MyProfile.css';

const MyProfile = ({ profile, toggle }) => {
  if (!profile || !profile.email) {
    return (
      <div className="my-profile" style={{ maxWidth: '200px' }}>
        <Avatar shape="square" size={200} icon='user' />
      </div>
    )
  }

  const { username, email, state, school, birth, imageUrl } = profile;
  return (
    <div className="my-profile" style={{ maxWidth: '200px' }}>
      <Avatar shape="square" size={200} icon={!imageUrl && 'user'} src={imageUrl} />
      <div className="fade-in">
        <div className="profile-basic">
          <div className="profile-major">
            <div className="profile-name">{username}</div>
            <div className="profile-id">({email})</div>
          </div>
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
        <Button
          style={{ float: 'right', color: '#03cf5d' }}
          onClick={toggle}
          type="link"
          size="small"
        >
          수정
        </Button>
      </div>
    </div>
  );
};

MyProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MyProfile;