import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { Button } from 'antd';
import { Input, FormItem, Form } from '@jbuschke/formik-antd';

import { ImageUploader } from 'components';
import { EventActionCreators } from '../../../store/event/event.action';
import './EventEditor.css';

const { TextArea } = Input;

const InitialValue = {
  content: '',
};

class EventEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUploaderVisible: false,
      fileList: [],
    };
  }

  handleChange = ({ fileList }) => {
    const urlList = fileList.map(file => {
      if (file.response) {
        const { url, thumbUrl } = file.response;
        return { url, thumbUrl };
      } else {
        return { url: '', thumbUrl: '' };
      }
    });

    this.setState({ fileList: urlList });
  };

  render() {
    const { fileList, imageUploaderVisible } = this.state;
    const { registerEvent } = this.props;

    return (
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <Formik
          initialValues={InitialValue}
          onSubmit={values => {
            registerEvent({ ...values, files: fileList });
          }}
          render={() => (
            <Form>
              <FormItem name="content">
                <TextArea
                  name="content"
                  className="editor-textarea"
                  style={{ resize: 'none' }}
                  rows={1}
                  placeholder="지금 떠오르는 생각을 친구들에게 공유해보세요."
                />
              </FormItem>
              <div className="editor-button-area">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="editor-button"
                  shape="circle"
                  icon="form"
                />
                <Button
                  type="primary"
                  className="editor-button"
                  onClick={() =>
                    this.setState({
                      imageUploaderVisible: !imageUploaderVisible,
                    })
                  }
                  shape="circle"
                  icon="picture"
                />
              </div>
            </Form>
          )}
        />
        {imageUploaderVisible && (
          <div className="editor-image-uploader">
            <ImageUploader
              fileList={fileList}
              handleChange={this.handleChange}
            />
          </div>
        )}
      </div>
    );
  }
}

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
