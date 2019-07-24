import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EventCard } from 'components';

class EventList extends Component {
  render() {
    const { events } = this.props;
    if (!events.length) {
      return (
        <div>등록된 게시글이 없습니다.</div>
      );
    }

    return (
      <div>
        {events.map(event => {
          const { id } = event;
          return (
            <EventCard event={event} key={`event_${id}`} />
          )
        })}
      </div>
    );
  }
}

EventList.defaultProps = {
  events: [],
};

EventList.propTypes = {
  events: PropTypes.array,
};

export default EventList;