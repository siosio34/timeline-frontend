import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import EventCard from './eventCard';
import './EventList.css';

const EventList = ({ events, loading }) => {
  if (loading) {
    return <Icon type="loading" />
  }
  if (!events.length) {
    return <div>등록된 게시글이 없습니다.</div>
  }
  return (
    <>
      {events.map(event => {
        const { id } = event;
        return (
          <EventCard event={event} key={`event_${id}`} />
        )
      })}
    </>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default EventList;