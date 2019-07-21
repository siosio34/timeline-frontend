import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal, Upload } from 'antd';

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
);

const ImageUploader = ({ fileList, handleChange }) => {
  const [ previewVisible, setPreviewVisible ] = useState(false);
  const [ previewImage, setPreviewImage ] = useState('');

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
  };

  return (
    <div className="clearfix">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 4 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </div>
  )
};

ImageUploader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  fileList: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImageUploader;

