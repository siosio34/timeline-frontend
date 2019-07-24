import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { FriendActionCreators } from 'store/friends/friend.action';

const RequestFriendsButton = ({ friendInfo = {}, cancelFriendsRequest }) => {
  return (
    <Button
      size="small"
      type="dashed"
      onClick={cancelFriendsRequest(friendInfo)}
    >
      요청 취소
    </Button>
  );
};

RequestFriendsButton.propTypes = {
  friendInfo: PropTypes.object.isRequired,
  cancelFriendsRequest: PropTypes.func.isRequired,
};

const mapStatetoProps = () => ({});
const mapDispatchToProps = dispatch => ({
  cancelFriendsRequest: friendInfo => e =>
    dispatch(FriendActionCreators.cancelFriendsRequest(friendInfo)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(RequestFriendsButton);
