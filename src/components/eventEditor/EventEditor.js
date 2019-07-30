import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createLoadingSelector from 'utils/createLoadingSelector';
import {
  EventActionTypes,
  EventActionCreators,
} from 'store/event/event.action';
import EventEditorComponent from './EventEditorComponent';
import './EventEditor.css';
import axios from 'axios';

const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

class EventEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      successUploadImageUrls: [],
      uploaderVisible: false,
      previewVisible: false,
      previewImage: '',
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = info => {
    this.setState({ fileList: info.fileList });
  };

  handleSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    const { registerEvent } = this.props;
    const { fileList } = this.state;

    const sucessUploadImageUrls = fileList
      .filter(item => item.status === 'done')
      .map(file => ({
        url: file.response.successes[0].url,
        thumbUrl: file.response.successes[0].queues[0].url,
      }));

    const isSuccessUploadAllImages =
      fileList.length === sucessUploadImageUrls.length;

    registerEvent({
      eventData: {
        ...values,
        files: sucessUploadImageUrls,
      },
      resetForm,
    });
  };

  toggleUploader = () => {
    const { uploaderVisible } = this.state;
    this.setState({
      uploaderVisible: !uploaderVisible,
    });
  };

  render() {
    const {
      previewVisible,
      previewImage,
      fileList,
      uploaderVisible,
    } = this.state;

    const { registerEvent } = this.props;

    const uploadProps = {
      multiple: true,
      listType: 'picture-card',
      action:
        'https://api-image.cloud.toast.com/image/v2.0/appkeys/nyXWlYDoYYEf6s19/images',
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      headers: {
        Authorization: 'bMjzQRvR',
        'Content-type': '',
      },
      file: fileList,
      customRequest({
        action,
        data,
        filename,
        file,
        headers,
        onError,
        onProgress,
        onSuccess,
        withCredentials,
      }) {
        const formData = new FormData();
        formData.append('files', file);
        formData.append(
          'params',
          JSON.stringify({
            basepath: '/images/event',
            autorename: true,
            operationIds: ['250x150'],
          }),
        );
        axios
          .post(action, formData, {
            headers,
          })
          .then(({ data: response }) => {
            if (response.header.isSuccessful) {
              onSuccess(response, file);
            }
          })
          .catch(onError);
      },
    };

    return (
      <EventEditorComponent
        handleSubmit={this.handleSubmit}
        handlePreview={this.handlePreview}
        handleChange={this.handleChange}
        handleCancel={this.handleCancel}
        toggleUploader={this.toggleUploader}
        uploaderVisible={this.state.uploaderVisible}
        previewVisible={this.state.previewVisible}
        previewImage={this.state.previewImage}
        loading={this.props.loading}
        fileList={this.state.fileList}
        uploadProps={uploadProps}
      />
    );
  }
}

EventEditor.propTypes = {
  registerEvent: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const eventRegisterLoadingSelector = createLoadingSelector([
  EventActionTypes.EVENT_REGISTER.BASE,
]);

const mapStateToProps = state => ({
  loading: eventRegisterLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  registerEvent: inputEventData =>
    dispatch(EventActionCreators.registerEvent(inputEventData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventEditor);
