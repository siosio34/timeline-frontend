import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import './FriendsEmpty.css';

const FriendsEmpty = ({ message }) => (
  <div className="friends-empty">
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      imageStyle={{
        marginBottom: '20px',
      }}
      description={message || '새로운 요청이 없습니다.'}
    />
  </div>
);

FriendsEmpty.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FriendsEmpty;