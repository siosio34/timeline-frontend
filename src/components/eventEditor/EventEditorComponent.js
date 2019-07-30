import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal, Upload } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import EventEditorForm from './eventEditorForm';

const RegisterSchema = Yup.object().shape({
  content: Yup.string().required('내용을 입력해주세요.'),
});

const uploadButton = (
  <div>
    <Icon type="plus" />
    <div className="ant-upload-text">Upload</div>
  </div>
);

const EventEditorComponent = props => {
  const {
    toggleUploader,
    handleSubmit,
    handleCancel,
    uploaderVisible,
    previewVisible,
    previewImage,
    fileList,
    loading,
    uploadProps,
  } = props;

  return (
    <div className="event-editor">
      <Formik
        initialValues={{
          content: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
        render={() => (
          <EventEditorForm toggleUploader={toggleUploader} loading={loading} />
        )}
      />
      {uploaderVisible && (
        <div className="clearfix">
          <Upload {...uploadProps}>
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      )}
    </div>
  );
};

EventEditorComponent.propTypes = {
  toggleUploader: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handlePreview: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  uploaderVisible: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  previewVisible: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  fileList: PropTypes.array.isRequired,
  uploadProps: PropTypes.object.isRequired,
};

export default EventEditorComponent;
