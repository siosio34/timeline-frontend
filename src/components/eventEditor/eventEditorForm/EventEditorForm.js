import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormItem, Input } from '@jbuschke/formik-antd';
import { Button } from 'antd';

const { TextArea } = Input;

const EventEditorForm = ({ toggleUploader, loading }) => {
  return (
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
          loading={loading}
          disabled={loading}
        >
          저장
        </Button>
        <Button
          type="primary"
          className="editor-button photo"
          onClick={toggleUploader}
          ghost
        >
          사진
        </Button>
      </div>
    </Form>
  )
};

EventEditorForm.propTypes = {
  toggleUploader: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default EventEditorForm;