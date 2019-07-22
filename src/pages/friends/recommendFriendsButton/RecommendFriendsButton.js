import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const RecommendFriendsButton = ({ friend }) => {
  const { relationship } = friend;
  const isRequested = relationship === 'REQUEST';

  if (!isRequested) {
    return (
      <Button size="small">
        친구신청
      </Button>
    );
  }

  return (
    <Button size="small" type='dashed'>
      요청 중
    </Button>
  );
};

RecommendFriendsButton.defaultProps = {
  friend: {},
};

RecommendFriendsButton.propTypes = {
  friend: PropTypes.object,
};

export default RecommendFriendsButton;
