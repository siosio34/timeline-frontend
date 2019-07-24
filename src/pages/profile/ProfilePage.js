import React, { Component } from 'react';
import { EventEditor } from 'components';
import MyProfile from './myProfile';

class ProfilePage extends Component {
  render() {
    return (
      <div className="ant-row">
        <div className="ant-col ant-col-8">
          <MyProfile />
        </div>
        <div className="ant-col ant-col-16">
          <EventEditor />
        </div>
      </div>
    );
  }
};

export default ProfilePage;