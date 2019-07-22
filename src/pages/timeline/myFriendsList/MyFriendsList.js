import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Icon, Button } from 'antd';
import { FriendsList } from 'components';
import { FriendActionCreators } from 'store/friends/friend.action';
import MyFriendsButton from './myFriendsButton';

class MyFriendsList extends Component {
  componentDidMount() {
    const { getFriends } = this.props;
    getFriends();
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h3>내 친구목록</h3>
        <div className="ant-row">
          <Input
            className="ant-col ant-col-20"
            placeholder="내 친구 검색하기"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <Button style={{ marginLeft: '5px'}} type="primary" shape="circle" icon="search" />
        </div>
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