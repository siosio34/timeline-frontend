import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createLoadingSelector from 'utils/createLoadingSelector';
import createUploadOptions from 'utils/createUploadOptions';
import {
  EventActionTypes,
  EventActionCreators,
} from 'store/event/event.action';
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

const initialState = {
  fileList: [],
  successUploadImageUrls: [],
  uploaderVisible: false,
  previewVisible: false,
  previewImage: '',
};

class EventEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
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

  handleSubmit = (values, { resetForm }) => {
    const { registerEvent, isMyProfile } = this.props;
    const { fileList } = this.state;
    const { clearImageUploader } = this;

    const sucessUploadImageUrls = fileList
      .filter(item => item.status === 'done')
      .map(file => ({
        url: file.response.successes[0].url,
        thumbUrl: file.response.successes[0].queues[0].url,
      }));

    registerEvent({
      eventData: {
        ...values,
        files: sucessUploadImageUrls,
      },
      resetForm: () => {
        clearImageUploader();
        resetForm();
      },
      isMyProfile,
    });
  };

  toggleUploader = () => {
    const { uploaderVisible } = this.state;
    this.setState({
      uploaderVisible: !uploaderVisible,
    });
  };

  clearImageUploader = () => {
    this.setState({
      ...initialState
    });
  };

  render() {
    const uploadProps = createUploadOptions({
      handleChange: this.handleChange,
      handlePreview: this.handlePreview,
      basePath: '/images/event',
      operationIds: ['250x150'],
      fileList: this.state.fileList,
    });

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
        uploadProps={{
          ...uploadProps,
          multiple: true,
          listType: 'picture-card',
        }}
      />
    );
  }
}

EventEditor.defaultProps = {
  isMyProfile: false,
};

EventEditor.propTypes = {
  registerEvent: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isMyProfile: PropTypes.bool,
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
