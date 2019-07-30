import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Upload } from 'antd';

const MyProfileImage = ({ profileImage, uploadProps }) => {
  return (
    <Upload {...uploadProps}>
      <Avatar
        className="profile-image"
        shape="square"
        size={200}
        icon={!profileImage && 'user'}
        src={profileImage}
      />
    </Upload>
  );
};

MyProfileImage.defaultProps = {
  profileImage: '',
};

MyProfileImage.propTypes = {
  uploadProps: PropTypes.object.isRequired,
  profileImage: PropTypes.string,
};

export default MyProfileImage;