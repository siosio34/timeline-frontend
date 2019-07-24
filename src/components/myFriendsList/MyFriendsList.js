import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon } from 'antd';
import { FriendsList } from 'components';
import { FriendActionCreators } from 'store/friends/friend.action';
import MyFriendsButton from './myFriendsButton';

const { Search } = Input;

class MyFriendsList extends Component {
  componentDidMount() {
    const { getFriends } = this.props;
    getFriends();
  }

  render() {
    const { friends } = this.props;
    return (
      <div style={{ paddingLeft: '20px' }}>
        <Search
          placeholder="내 친구 검색하기"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <FriendsList
          friends={friends}
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
  friends: PropTypes.array,
};

const mapStateToProps = state => ({
  friends: state.friend.friends,
});

const mapDispatchToProps = dispatch => ({
  getFriends: () => dispatch(FriendActionCreators.getFriends()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyFriendsList);