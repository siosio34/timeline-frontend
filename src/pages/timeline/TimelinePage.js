import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import EventEditor from './eventEditor';

class TimelinePage extends React.Component {
  componentDidMount() {}

  render() {
    const { isLogin } = this.props;
    if (isLogin) {
      return (
        <div>서비스를 이용하려면 로그인이 필요합니다.</div>
      );
    }

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>타임라인</h1>
        <EventEditor />
      </div>
    );
  }
}

TimelinePage.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLogin: state.account.isLogin,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TimelinePage);