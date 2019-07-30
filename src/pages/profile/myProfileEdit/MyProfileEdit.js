import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import createLoadingSelector from 'utils/createLoadingSelector';
import createUploadOptions from 'utils/createUploadOptions';
import { ProfileActionTypes, ProfileActionCreators } from 'store/profile/profile.action';
import MyProfileForm from './MyProfileForm';
import MyProfileImage from './MyProfileImage';
import './MyProfileEdit.css';

class MyProfileEdit extends Component {
  constructor(props) {
    super(props);
    const { profile } = this.props;
    this.state = {
      profileImage: profile.profileImage,
    };
  }

  handleChange = info => {
    const { status } = info.file;
    if (status === 'done') {
      const [ result ] = info.file.response.successes;
      this.setState({
        profileImage: {
          url: result.url,
          thumbUrl: result.queues[0].url,
        },
        imageUploading: false,
      });
    }
  };

  render() {
    const { profileImage, fileList } = this.state;
    const { profile, toggle, editLoading } = this.props;
    const { editMyProfile } = this.props;
    const { username, email, state, school, birth } = profile;
    const uploadProps = createUploadOptions({
      handlePreview: this.handlePreview,
      handleChange: this.handleChange,
      basePath: '/images/profile',
      operationIds: ['256x256'],
      fileList,
    });

    return (
      <div className="my-profile-edit">
        <MyProfileImage
          profileImage={profileImage.url}
          uploadProps={uploadProps}
        />
        <div className="profile-basic">
          <div className="profile-major">
            <div className="profile-name">{username}</div>
            <div className="profile-id">({email})</div>
          </div>
        </div>
        <Formik
          initialValues={{ state, school, birth }}
          onSubmit={values => {
            editMyProfile({
              ...values,
              profileImage,
            });
            toggle();
          }}
          render={() => <MyProfileForm loading={editLoading} />}
        />
      </div>
    );
  }
}

MyProfileEdit.propTypes = {
  profile: PropTypes.object.isRequired,
  editLoading: PropTypes.bool.isRequired,
  editMyProfile: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};

const editLoadingSelector = createLoadingSelector([
  ProfileActionTypes.EDIT_MY_PROFILE.BASE,
]);

const mapStateToProps = state => ({
  editLoading: editLoadingSelector(state),
  isSaveEdit: state.profile.isSaveEdit,
});

const mapDispatchToProps = dispatch => ({
  editMyProfile: values => dispatch(ProfileActionCreators.editMyProfile(values)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyProfileEdit);