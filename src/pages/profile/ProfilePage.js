import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EventEditor } from 'components';
import { TimelineActionCreators } from 'store/timeline/timeline.action';
import MyProfile from './myProfile';
import EventList from './eventList';

class ProfilePage extends Component {
  componentDidMount() {
    const { getUserTimeline } = this.props;
    const { userEmail } = this.props;
    getUserTimeline({
      email: userEmail || 'soyoung.dev@gmail.com',
      page: 0,
    });
  }

  render() {
    const { events } = this.props;
    return (
      <div className="ant-row">
        <div className="ant-col ant-col-8">
          <MyProfile />
        </div>
        <div className="ant-col ant-col-16">
          <EventEditor />
          <EventList events={events} />
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  getUserTimeline: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  userEmail: state.account.userInfo.email,
  events: state.timeline.events,
});

const mapDispatchToProps = dispatch => ({
  getUserTimeline: userEmail => dispatch(TimelineActionCreators.getUserTimeline(userEmail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);