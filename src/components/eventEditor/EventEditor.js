import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { message } from 'antd';
import createLoadingSelector from 'utils/createLoadingSelector';
import { EventActionTypes, EventActionCreators } from 'store/event/event.action';
import EventEditorComponent from './EventEditorComponent';
import './EventEditor.css';

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
    const { status, response } = info.file;
    const { successUploadImageUrls } = this.state;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      const newSuccessUploadImageUrls = successUploadImageUrls.concat({
        url: response.url,
        thumbUrl: response.thumbUrl,
      });

      this.setState({ successUploadImageUrls: newSuccessUploadImageUrls });
      message.success(`${info.file.name} file uploaded successfully.`);
      // 여기서 완료된거만 url로 모아놔야한다.
      // 그
      // this.setState({ fileList });
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }

    this.setState({ fileList: info.fileList });
  };

  handleSubmit = (values, {setSubmitting, setErrors, setStatus, resetForm}) => {
    const { registerEvent } = this.props;
    const { successUploadImageUrls } = this.state;
    registerEvent({
      eventData: {
        ...values, files: successUploadImageUrls
      },
      resetForm,
    });
  };

  toggleUploader = () => {
    const { uploaderVisible } = this.state;
    this.setState({
      uploaderVisible: !uploaderVisible,
    })
  };

  render() {
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
