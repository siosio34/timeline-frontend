import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import createLoadingSelector from 'utils/createLoadingSelector';
import { ProfileActionTypes, ProfileActionCreators } from 'store/profile/profile.action';
import MyProfileForm from './MyProfileForm';
import MyProfileImage from './MyProfileImage';
import './MyProfileEdit.css';

class MyProfileEdit extends Component {
  constructor(props) {
    super(props);
    const { profile } = this.props;
    this.state = {
      profileImage: profile.imageUrl || '',
      imageUploading: false,
    };
  }

  handleChange = info => {
    const { status, response } = info.file;
    if (status === 'uploading') {
      this.setState({
        imageUploading: true,
        profileImage: '',
      });
      return;
    }
    if (status === 'done') {
      // console.log('file:', response);
      this.setState({
        profileImage: response.url,
        imageUploading: false,
      });
    }
  };

  render() {
    const { profileImage, imageUploading } = this.state;
    const { profile, toggle, editLoading } = this.props;
    const { editMyProfile } = this.props;
    const { username, email, state, school, birth } = profile;

    return (
      <div className="my-profile-edit">
        <MyProfileImage
          onChange={this.handleChange}
          imageUploading={imageUploading}
          profileImage={profileImage}
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
              imageUrl: profileImage,
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