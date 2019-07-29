import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon } from 'antd';
import { FriendsList } from 'components';

import { FriendActionCreators } from 'store/friends/friend.action';
import FriendSelector from 'store/friends/friend.select';
import MyFriendsButton from './myFriendsButton';

const { Search } = Input;

class MyFriendsList extends Component {
  componentDidMount() {
    const { getFriends } = this.props;
    getFriends();
  }

  render() {
    const { searchedMyFriends, handleFriendSearchInputChange } = this.props;
    return (
      <div style={{ paddingLeft: '20px' }}>
        <Search
          placeholder="내 친구 검색하기"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={handleFriendSearchInputChange}
        />
        <FriendsList
          friends={searchedMyFriends}
          FriendsButton={MyFriendsButton}
        />
      </div>
    );
  }
}

MyFriendsList.defaultProps = {
  friends: [],
};

MyFriendsList.propTypes = {
  getFriends: PropTypes.func.isRequired,
  handleFriendSearchInputChange: PropTypes.func.isRequired,
  friends: PropTypes.array,
  searchedMyFriends: PropTypes.array,
};

const mapStateToProps = state => ({
  friends: state.friend.friends,
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
