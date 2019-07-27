import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EventEditor, EventList } from 'components';
import { TimelineActionTypes, TimelineActionCreators } from 'store/timeline/timeline.action';
import { ProfileActionCreators } from 'store/profile/profile.action';
import createLoadingSelector from 'utils/createLoadingSelector';
import MyProfile from './myProfile';

class ProfilePage extends Component {
  componentDidMount() {
    const { getUserTimeline, getMyProfile } = this.props;
    const { userEmail } = this.props;
    getUserTimeline({
      email: userEmail || 'soyoung.dev@gmail.com',
      page: 0,
    });
    getMyProfile();
  }

  render() {
    const { events, myProfile, timelineLoading } = this.props;
    return (
      <div className="ant-row">
        <div className="ant-col ant-col-8">
          <MyProfile profile={myProfile} />
        </div>
        <div className="ant-col ant-col-16">
          <EventEditor />
          <EventList events={events} loading={timelineLoading} />
        </div>
      </div>
    );
  }
}

ProfilePage.defaultProps = {
  myProfile: {},
};

ProfilePage.propTypes = {
  getUserTimeline: PropTypes.func.isRequired,
  getMyProfile: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  myProfile: PropTypes.object,
  timelineLoading: PropTypes.bool.isRequired,
};

const timelineLoadingSelector = createLoadingSelector([
  TimelineActionTypes.GET_USER_TIMELINE.BASE,
]);

const mapStateToProps = state => ({
  userEmail: state.account.userInfo.email,
  events: state.timeline.events,
  myProfile: state.profile.myProfile,
  timelineLoading: timelineLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getUserTimeline: userEmail => dispatch(TimelineActionCreators.getUserTimeline(userEmail)),
  getMyProfile: () => dispatch(ProfileActionCreators.getMyProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage);