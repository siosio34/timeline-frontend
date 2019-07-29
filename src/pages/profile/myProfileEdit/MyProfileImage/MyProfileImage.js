import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Upload } from 'antd';

const MyProfileImage = ({ onChange, profileImage, imageUploading }) => {
  const iconType = imageUploading ? 'loading' : 'user';
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={onChange}
    >
      <Avatar
        className="profile-image"
        shape="square"
        size={200}
        icon={!profileImage && iconType}
        src={profileImage}
      />
    </Upload>
  );
};

MyProfileImage.defaultProps = {
  profileImage: '',
};

MyProfileImage.propTypes = {
  onChange: PropTypes.func.isRequired,
  profileImage: PropTypes.string,
  imageUploading: PropTypes.bool.isRequired,
};

export default MyProfileImage;