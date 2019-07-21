import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const RecommendFriendsButton = ({ friendInfo = {} }) => {
  const { requested } = friendInfo;
  return (
    <Button
      size="small"
      type={requested ? 'RequestFriendsButton' : 'dashed'}
    >
      {requested ? '친구신청' : '요청 중'}
    </Button>
  );
};

RecommendFriendsButton.defaultProps = {
  friendInfo: {},
};

RecommendFriendsButton.propTypes = {
  friendInfo: PropTypes.object,
};

export default RecommendFriendsButton;
