import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EventEditor, MyFriendsList, EventList } from 'components';
import {
  TimelineActionCreators,
  TimelineActionTypes,
} from 'store/timeline/timeline.action';
import { ProfileActionCreators } from 'store/profile/profile.action';
import createLoadingSelector from 'utils/createLoadingSelector';

import { Spin } from 'antd';
import TimelineSelector from 'store/timeline/timeline.select';

class TimelinePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getTimeline, getMyProfile } = this.props;
    getTimeline({ page: 0 });
    getMyProfile();
  }

  handleScroll = e => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && this.props.isExistTimeline) {
      // 여기서 바닥찍는 액션 호출
      this.props.getAddTimeline();
    }
  };

  render() {
    const { events, timelineLoading } = this.props;

    return (
      <div className="ant-row">
        <div className="ant-col ant-col-16">
          <EventEditor />
          <div
            style={{ height: 800, overflow: 'auto' }}
            onScroll={this.handleScroll}
          >
            <EventList events={events} loading={timelineLoading} />
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </div>
        </div>
        <div className="ant-col ant-col-8">
          <MyFriendsList />
        </div>
      </div>
    );
  }
}

TimelinePage.propTypes = {
  getTimeline: PropTypes.func.isRequired,
  getMyProfile: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
  timelineLoading: PropTypes.bool.isRequired,
};

const timelineLoadingSelector = createLoadingSelector([
  TimelineActionTypes.GET_TIMELINE.BASE,
]);

const mapStateToProps = state => ({
  events: state.timeline.events,
  timelineLoading: timelineLoadingSelector(state),
  isExistTimeline: TimelineSelector.getIsExistTimeline(state),
});

const mapDispatchToProps = dispatch => ({
  getTimeline: payload => dispatch(TimelineActionCreators.getTimeline(payload)),
  getAddTimeline: () => dispatch(TimelineActionCreators.getAddTimeline()),
  getMyProfile: () => dispatch(ProfileActionCreators.getMyProfile()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelinePage);
