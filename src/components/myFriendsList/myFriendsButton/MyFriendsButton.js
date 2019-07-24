import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const MyFriendsButton = ({ friendInfo = {} }) => {
  return (
    <Button
      size="small"
      type="link"
      className="myfriends-delete"
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
};

export default MyFriendsButton;
