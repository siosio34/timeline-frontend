import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal, Upload } from 'antd';
import { Formik } from 'formik';
import * as Yup from 'yup';
import EventEditorForm from './eventEditorForm';

const RegisterSchema = Yup.object().shape({
  content: Yup.string()
    .required('내용을 입력해주세요.'),
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
    handlePreview,
    handleChange,
    handleCancel,
    uploaderVisible,
    previewVisible,
    previewImage,
    fileList,
    loading
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
          <EventEditorForm
            toggleUploader={toggleUploader}
            loading={loading}
          />
        )}
      />
      {uploaderVisible && (
        <div className="clearfix">
          <Upload
            multiple
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            footer={null}
            onCancel={handleCancel}
          >
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
};

export default EventEditorComponent;