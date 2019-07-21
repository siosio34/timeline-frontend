import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const RequestFriendsButton = ({ friendInfo = {} }) => {
  return (
    <>
      <Button size="small" style={{ marginRight: '2px' }} type="primary" ghost>
        수락
      </Button>
      <Button size="small" type="danger" ghost>
        거절
      </Button>
    </>
  );
};

RequestFriendsButton.defaultProps = {
  friendInfo: {},
};

RequestFriendsButton.propTypes = {
  friendInfo: PropTypes.object,
};

export default RequestFriendsButton;
