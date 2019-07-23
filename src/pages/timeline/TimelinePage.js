import React from 'react';

import EventEditor from './eventEditor';
import MyFriendsList from './myFriendsList';
import EventList from './eventList';

const eventListMock = [
  { id: 1, author: '홍길동', content: '내이름은 홍길동이야.', images: [], timestamp: '2019-03-18' },
  { id: 2, author: '김철수', content: '내이름은 홍ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹ길동이야.', images: [], timestamp: '2019-03-18' },
  { id: 3, author: '김영희', content: '내이름은 홍길동이야.', images: [], timestamp: '2019-03-18' },
];

class TimelinePage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="ant-row">
        <div className="ant-col ant-col-16">
          <EventEditor />
          <EventList
            events={eventListMock}
          />
        </div>
        <div className="ant-col ant-col-8">
          <MyFriendsList />
        </div>
      </div>
    );
  }
}

export default TimelinePage;