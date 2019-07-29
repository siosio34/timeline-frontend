import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import EventCard from './eventCard';
import EventEmpty from './eventEmpty';
import './EventList.css';

const EventList = ({ events, loading }) => {
  if (loading) {
    return (
      <div className="event-list">
        <Icon type="loading" />
      </div>
    )
  }
  if (!events.length) {
    return <EventEmpty />
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