import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Avatar, Button, Carousel } from 'antd';
import { getValidTime } from 'utils/timeFormat';
import { EventActionCreators } from 'store/event/event.action';
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
            {updateTime ? getValidTime(updateTime) : getValidTime(createTime)}
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
      {files.length === 1 && (
        <img className="timeline-item-image" alt="이벤트 이미지" src={files[0].url} />
      )}
      {files.length > 1 && (
        <Carousel>
          {files.map(file => {
            return (
              <div key={`img_${file.thumbUrl}`}>
                <img className="timeline-item-image" alt="이벤트 이미지" src={file.url} />
              </div>
            );
          })}
        </Carousel>
      )}
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
