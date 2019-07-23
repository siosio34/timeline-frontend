import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import './EventCard.css';

const EventCard = ({ loading, event }) => {
  const { author, avatar, content, timestamp } = event;
  if (loading) {
    return <div>로딩 중</div>;
  }

  return (
    <div className="timeline-item">
      <div className="timeline-item-info">
        <Avatar size="" alt="user thumbnail" src={avatar} icon={!avatar && 'user'} />
        <div className="meta-section">
          <div className="author-name">{author}</div>
          <div className="timeline-item-datetime">{timestamp}</div>
        </div>
      </div>
      {content && (
        <div className="timeline-item-contents">
          <p className="text-contents">{content}</p>
        </div>
      )}
    </div>
  );
};

EventCard.defaultProps = {
  loading: false,
  event: {},
};

EventCard.propTypes = {
  event: PropTypes.object,
  loading: PropTypes.bool,
};

export default EventCard;