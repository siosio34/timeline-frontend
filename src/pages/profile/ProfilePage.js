import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { EventEditor, EventList } from 'components';
import { TimelineActionTypes, TimelineActionCreators } from 'store/timeline/timeline.action';
import { ProfileActionCreators } from 'store/profile/profile.action';
import createLoadingSelector from 'utils/createLoadingSelector';
import MyProfile from './myProfile';
import MyProfileEdit from './myProfileEdit';

const { Content, Sider } = Layout;

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileEditMode: false,
    }
  }

  componentDidMount() {
    const { getUserTimeline, getMyProfile } = this.props;
    const { userEmail } = this.props;
    getUserTimeline({
      email: userEmail || 'soyoung.dev@gmail.com',
      page: 0,
    });
    getMyProfile();
  }

  toggleEditMode = () => {
    const { profileEditMode } = this.state;
    this.setState({ profileEditMode: !profileEditMode });
  };

  render() {
    const { events, myProfile, timelineLoading } = this.props;
    const { toggleEditMode } = this;
    const { profileEditMode } = this.state;
    return (
      <Layout style={{ background: 'none' }}>
        <Sider style={{ background: 'none' }}>
          {profileEditMode ?
            <MyProfileEdit toggle={toggleEditMode} profile={myProfile} /> :
            <MyProfile toggle={toggleEditMode} profile={myProfile} />}
        </Sider>
        <Content style={{ paddingLeft: '30px'}}>
          <EventEditor />
          <EventList events={events} loading={timelineLoading} />
        </Content>
      </Layout>
    );
  }
}

ProfilePage.propTypes = {
  getUserTimeline: PropTypes.func.isRequired,
  getMyProfile: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  myProfile: PropTypes.object.isRequired,
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