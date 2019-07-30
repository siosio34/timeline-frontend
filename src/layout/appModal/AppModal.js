import React from 'react';
import { connect } from 'react-redux';
import { ModalActionCreators } from 'store/modal/modal.action';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const AppModal = ({ title, content, isShow, confirmOk, confirmCancel }) => {
  return (
    <Modal
      title={title}
      visible={isShow}
      onOk={confirmOk}
      onCancel={confirmCancel}
    >
      {content}
    </Modal>
  );
};

AppModal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isShow: PropTypes.bool.isRequired,
  confirmOk: PropTypes.func.isRequired,
  confirmCancel: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: state.modal.title,
  content: state.modal.content,
  isShow: state.modal.isShow,
});

const mapDispatchToProps = dispatch => ({
  confirmOk: () => dispatch(ModalActionCreators.confirmOK()),
  confirmCancel: () => dispatch(ModalActionCreators.confirmCancel()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppModal);
