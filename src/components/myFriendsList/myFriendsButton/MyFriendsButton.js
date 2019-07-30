import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createLoadingSelector from 'utils/createLoadingSelector';
import { FriendActionTypes, FriendActionCreators } from 'store/friends/friend.action';
import { Button } from 'antd';

const MyFriendsButton = ({ friendInfo, deleteFriend, friendDeleteLoading }) => {
  const { email, username } = friendInfo;
  return (
    <Button
      size="small"
      type="link"
      className="myfriends-delete"
      onClick={() => deleteFriend({ email, username })}
      loading={friendDeleteLoading}
      disabled={friendDeleteLoading}
    >
      삭제
    </Button>
  );
};

MyFriendsButton.defaultProps = {
  friendInfo: {},
};

MyFriendsButton.propTypes = {
  friendInfo: PropTypes.object,
  deleteFriend: PropTypes.func.isRequired,
  friendDeleteLoading: PropTypes.bool.isRequired,
};

const friendDeleteLoadingSelector = createLoadingSelector([
  FriendActionTypes.DELETE_FRIEND.BASE,
]);

const mapStateToProps = state => ({
  friendDeleteLoading: friendDeleteLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  deleteFriend: requestInfo => dispatch(FriendActionCreators.deleteFriend(requestInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFriendsButton);
