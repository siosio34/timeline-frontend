import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon } from 'antd';
import createLoadingSelector from 'utils/createLoadingSelector';
import FriendSelector from 'store/friends/friend.select';
import { FriendActionTypes, FriendActionCreators } from 'store/friends/friend.action';
import { FriendsList } from 'components';
import MyFriendsButton from './myFriendsButton';

const { Search } = Input;

class MyFriendsList extends Component {
  componentDidMount() {
    const { getFriends } = this.props;
    getFriends();
  }

  render() {
    const { searchedMyFriends, handleFriendSearchInputChange, friendsLoading } = this.props;
    return (
      <div style={{ paddingLeft: '20px' }}>
        <Search
          placeholder="내 친구 검색하기"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={handleFriendSearchInputChange}
        />
        <FriendsList
          friends={searchedMyFriends}
          loading={friendsLoading}
          FriendsButton={MyFriendsButton}
          emptyMessage="아직 친구가 없습니다."
        />
      </div>
    );
  }
}

MyFriendsList.defaultProps = {
  searchedMyFriends: [],
};

MyFriendsList.propTypes = {
  getFriends: PropTypes.func.isRequired,
  friendsLoading: PropTypes.bool.isRequired,
  handleFriendSearchInputChange: PropTypes.func.isRequired,
  searchedMyFriends: PropTypes.array,
};

const friendsLoadingSelector = createLoadingSelector([
  FriendActionTypes.GET_FRIENDS.BASE,
]);

const mapStateToProps = state => ({
  friends: state.friend.friends,
  friendsLoading: friendsLoadingSelector(state),
  searchedMyFriends: FriendSelector.getSearchedFriends(state),
});

const mapDispatchToProps = dispatch => ({
  getFriends: () => dispatch(FriendActionCreators.getFriends()),
  handleFriendSearchInputChange: event =>
    dispatch(
      FriendActionCreators.handleFriendSearchInputChange(event.target.value),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFriendsList);
