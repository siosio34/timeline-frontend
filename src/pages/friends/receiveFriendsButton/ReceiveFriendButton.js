import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { FriendActionCreators } from 'store/friends/friend.action';

const ReceiveFriendButton = ({
  friendInfo = {},
  allowFriendRequest,
  denyFriendRequest,
}) => {
  return (
    <>
      <Button
        size="small"
        style={{ marginRight: '2px' }}
        type="primary"
        ghost
        onClick={allowFriendRequest(friendInfo)}
      >
        수락
      </Button>
      <Button
        size="small"
        type="danger"
        ghost
        onClick={denyFriendRequest(friendInfo)}
      >
        거절
      </Button>
    </>
  );
};

ReceiveFriendButton.propTypes = {
  friendInfo: PropTypes.object.isRequired,
  allowFriendRequest: PropTypes.func.isRequired,
  denyFriendRequest: PropTypes.func.isRequired,
};

const mapStatetoProps = () => ({});
const mapDispatchToProps = dispatch => ({
  allowFriendRequest: friendInfo => e =>
    dispatch(FriendActionCreators.allowFriendRequest(friendInfo)),
  denyFriendRequest: friendInfo => e =>
    dispatch(FriendActionCreators.denyFriendRequest(friendInfo)),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(ReceiveFriendButton);
