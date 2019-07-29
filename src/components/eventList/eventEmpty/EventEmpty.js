import React from 'react';
import { Link } from 'react-router-dom';
import { Empty } from 'antd';
import './EventEmpty.css';

const EventEmpty = () => {
  return (
    <div className="event-empty">
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
          등록된 타임라인 이벤트가 없습니다.<br />
          새 친구를 추가하거나, 이벤트를 친구와 공유해보세요!
          </span>
        }
      >
        <Link type="link" to="/friends">친구 찾으러 가기</Link>
      </Empty>
    </div>
  );
};

export default EventEmpty;