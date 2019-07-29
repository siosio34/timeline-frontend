import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { Button, message, Upload, Modal, Icon } from 'antd';
import { Input, FormItem, Form } from '@jbuschke/formik-antd';

import { EventActionCreators } from 'store/event/event.action';
import './EventEditor.css';

const { TextArea } = Input;

const InitialValue = {
  content: '',
};

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
      imageUploaderVisible: false,
      fileList: [],
      previewVisible: false,
      previewImage: '',
      successUploadImageUrls: [],
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

  render() {
    const {
      previewVisible,
      previewImage,
      fileList,
      imageUploaderVisible,
      successUploadImageUrls,
    } = this.state;

    const { registerEvent } = this.props;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="event-editor">
        <Formik
          initialValues={InitialValue}
          onSubmit={values => {
            registerEvent({ ...values, files: successUploadImageUrls });
          }}
          render={() => (
            <Form>
              <FormItem name="content">
                <TextArea
                  name="content"
                  className="editor-textarea"
                  style={{ resize: 'none' }}
                  rows={3}
                  placeholder="지금 떠오르는 생각을 친구들에게 공유해보세요."
                  autosize
                />
              </FormItem>
              <div className="editor-button-area">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="editor-button"
                >
                  저장
                </Button>
                <Button
                  type="primary"
                  className="editor-button"
                  onClick={() =>
                    this.setState({
                      imageUploaderVisible: !imageUploaderVisible,
                    })
                  }
                >
                  사진
                </Button>
              </div>
            </Form>
          )}
        />
        {imageUploaderVisible && (
          <div className="clearfix">
            <Upload
              multiple
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={this.handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        )}
      </div>
    );
  }
}

EventEditor.propTypes = {
  registerEvent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  // loading: signinLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  registerEvent: inputEventData =>
    dispatch(EventActionCreators.registerEvent(inputEventData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventEditor);
