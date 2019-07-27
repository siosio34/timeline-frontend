import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EventEditor, MyFriendsList } from 'components';
import { TimelineActionCreators, TimelineActionTypes } from 'store/timeline/timeline.action';
import createLoadingSelector from 'utils/createLoadingSelector';
import EventList from './eventList';

class TimelinePage extends React.Component {
  componentDidMount() {
    const { getTimeline } = this.props;
    getTimeline({ page: 0 });
  }

  render() {
    const { events, timelineLoading } = this.props;
    return (
      <div className="ant-row">
        <div className="ant-col ant-col-16">
          <EventEditor />
          { timelineLoading ? (
            <div>타임라인 로딩 중</div>
          ) : (
            <EventList
              events={events}
            />
          )}
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
  events: PropTypes.array.isRequired,
  timelineLoading: PropTypes.bool.isRequired,
};

const timelineLoadingSelector = createLoadingSelector([
  TimelineActionTypes.GET_TIMELINE.BASE,
]);

const mapStateToProps = state => ({
  events: state.timeline.events,
  timelineLoading: timelineLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getTimeline: payload => dispatch(TimelineActionCreators.getTimeline(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelinePage);