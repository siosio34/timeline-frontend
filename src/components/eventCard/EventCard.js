import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { getValidTime } from 'utils/timeFormat';
import './EventCard.css';

const EventCard = ({ event }) => {
  const { authorUsername, avatar, content, createTime, updateTime } = event;
  return (
    <div className="timeline-item">
      <div className="timeline-item-info">
        <Avatar size="" alt="user thumbnail" src={avatar} icon={!avatar && 'user'} />
        <div className="meta-section">
          <div className="author-name">{authorUsername}</div>
          <div className="timeline-item-datetime">
            {updateTime ? getValidTime(updateTime) : getValidTime(createTime)}
          </div>
        </div>
      </div>
      {content && (
        <div className="timeline-item-contents">
          <div className="text-contents">{content}</div>
        </div>
      )}
    </div>
  );
};

EventCard.defaultProps = {
  event: {},
};

EventCard.propTypes = {
  event: PropTypes.object,
};

export default EventCard;