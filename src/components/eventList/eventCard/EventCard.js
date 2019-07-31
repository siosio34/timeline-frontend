import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Button } from 'antd';
import { EventActionCreators } from 'store/event/event.action';
import CardImage from './cardImage';
import './EventCard.css';


const EventCard = ({ event, userEmail, deleteEvent }) => {
  const {
    id,
    authorUsername,
    authorEmail,
    content,
    createTime,
    updateTime,
    profileImage,
    files,
  } = event;
  return (
    <div className="timeline-item">
      <div className="timeline-item-info">
        <Avatar
          size=""
          alt="user thumbnail"
          src={profileImage.thumbUrl}
          icon={!profileImage.thumbUrl && 'user'}
        />
        <div className="meta-section">
          <div className="author-name">{authorUsername}</div>
          <div className="timeline-item-datetime">
            {updateTime || createTime}
          </div>
        </div>
        {authorEmail === userEmail && (
          <Button
            type="link"
            onClick={() => deleteEvent(id)}
            style={{ float: 'right', marginTop: '15px', color: 'lightgray' }}
          >
            삭제
          </Button>
        )}
      </div>
      <div className="timeline-item-contents">
        <div className="text-contents">{content}</div>
      </div>
      <CardImage images={files} />
    </div>
  );
};

EventCard.defaultProps = {
  event: {},
};

EventCard.propTypes = {
  event: PropTypes.object,
  userEmail: PropTypes.string.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userEmail: state.account.email,
});

const mapDispatchToProps = dispatch => ({
  deleteEvent: eventId => dispatch(EventActionCreators.deleteEvent(eventId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventCard);
