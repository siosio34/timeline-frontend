import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Avatar, Button } from 'antd';
import { Input, FormItem, Form, Select } from '@jbuschke/formik-antd';
import createLoadingSelector from 'utils/createLoadingSelector';
import { ProfileActionTypes, ProfileActionCreators } from 'store/profile/profile.action';
import './MyProfileEdit.css';

const { Option } = Select;
const cityList = [
  '서울',
  '경기',
  '인천',
  '대전',
  '대구',
  '부산',
  '울산',
  '광주',
  '강원',
  '세종',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주',
  '국외',
];

class MyProfileEdit extends Component {
  render() {
    const { profile, toggle, editLoading } = this.props;
    const { editMyProfile } = this.props;
    const { username, email, state, school, birth, imageUrl } = profile;

    return (
      <div className="my-profile">
        <Avatar shape="square" size={200} icon={!imageUrl && 'user'} src={imageUrl} />
        <div className="profile-basic">
          <div className="profile-major">
            <div className="profile-name">{username}</div>
            <div className="profile-id">({email})</div>
          </div>
        </div>
        <Formik
          initialValues={{ state, school, birth }}
          onSubmit={values => {
            editMyProfile(values);
            toggle();
          }}
          render={() => (
            <Form style={{ maxWidth: '200px' }}>
              <FormItem label="거주지역" name="state">
                <Select placeholder="선택하기" name="state">
                  {cityList.map(city => (
                    <Option key={`cityOption_${city}`} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </FormItem>
              <FormItem label="학교" name="school">
                <Input name="school" />
              </FormItem>
              <FormItem label="생년월일" name="birth">
                <Input
                  name="birth"
                  placeholder="생년월일 6자를 입력해주세요."
                />
              </FormItem>
              <Button
                style={{ float: 'right' }}
                htmlType="submit"
                type="link"
                size="small"
                loading={editLoading}
                disabled={editLoading}
              >
                저장
              </Button>
            </Form>
          )}
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