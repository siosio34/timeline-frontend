import React from 'react';

import EventEditor from './eventEditor';
import MyFriendsList from './myFriendsList';

class TimelinePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="ant-row">
        <h1 style={{textAlign: 'center'}}>타임라인</h1>
        <div className="ant-col ant-col-16">
          <h4>여기는 이벤트 목록</h4>
          <EventEditor />
        </div>
        <div className="ant-col ant-col-8">
          <MyFriendsList />
        </div>
      </div>
    );
  }
}

export default TimelinePage;