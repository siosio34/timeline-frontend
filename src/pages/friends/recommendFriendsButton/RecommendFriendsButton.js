import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { FriendActionCreators } from 'store/friends/friend.action';

const RecommendFriendsButton = ({ friendInfo = {}, createFriendsRequest }) => {
  return (
    <>
      <Button
        size="small"
        style={{ marginRight: '2px' }}
        type="primary"
        ghost
        onClick={createFriendsRequest(friendInfo)}
      >
        친구신청
      </Button>
    </>
  );
};

RecommendFriendsButton.propTypes = {
  friendInfo: PropTypes.object.isRequired,
  createFriendsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  createFriendsRequest: friendInfo => e =>
    dispatch(FriendActionCreators.createFriendsRequest(friendInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecommendFriendsButton);
