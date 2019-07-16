import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Button, Row, Col } from 'antd';
import { Input, FormItem, Form, Select } from '@jbuschke/formik-antd';

import {
  AccountActionTypes,
  AccountActionCreators,
} from 'store/account/account.action';
import createLoadingSelector from 'utils/createLoadingSelector';
import './SignupForm.css';

const { Option } = Select;

const InitialValue = {
  email: '',
  password: '',
  username: '',
  city: '',
  school: '',
  birthday: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('해당 항목을 입력해 주세요.'),
  password: Yup.string()
    .min(10, '최소 10자 이상 입력해주세요.')
    .required('해당 항목을 입력해 주세요.'),
  username: Yup.string().required('해당 항목을 입력해 주세요.'),
  city: Yup.string().required('해당 항목을 선택해 주세요.'),
  school: Yup.string().required('해당 항목을 입력해 주세요.'),
  birthday: Yup.string()
    .min(6, '생년월일 6자를 입력해주세요.')
    .max(6, '생년월일 6자를 입력해주세요.')
    .required('해당 항목을 입력해 주세요.'),
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const cityList = [
  '서울', '경기', '인천', '대전', '대구', '부산', '울산', '광주',
  '강원', '세종', '충북', '충남', '전북', '전남', '경북', '경남',
  '제주', '국외'
];

class SignUpForm extends React.Component {
  render() {
    const { loading } = this.props;
    const { signup } = this.props;

    return (
      <div className="signup-form">
        <Formik
          initialValues={InitialValue}
          validationSchema={SignupSchema}
          onSubmit={values => {
            signup(values);
          }}
          render={() => (
            <Form {...formItemLayout}>
              <FormItem label="이메일" name="email">
                <Input name="email" type="email" />
              </FormItem>
              <FormItem label="패스워드" name="password">
                <Input.Password name="password" />
              </FormItem>
              <FormItem label="이름" name="username">
                <Input name="username" />
              </FormItem>
              <FormItem label="거주지역" name="city">
                <Select placeholder="선택하기" name="city">
                  {cityList.map(city =>
                    <Option key={`cityOption_${city}`} value={city}>{city}</Option>)}
                </Select>
              </FormItem>
              <FormItem label="학교" name="school">
                <Input name="school" />
              </FormItem>
              <FormItem label="생년월일" name="birthday">
                <Input name="birthday" placeholder="생년월일 6자를 입력해주세요." />
              </FormItem>
              <Row className="signup-submit">
                <Col span={4} offset={16}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={loading}
                  >
                    회원가입하기
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        />
      </div>
    );
  }
}

SignUpForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
};

const signupLoadingSelector = createLoadingSelector([
  AccountActionTypes.SIGNUP.BASE,
]);

const mapStateToProps = state => ({
  loading: signupLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  signup: inputAccountData =>
    dispatch(AccountActionCreators.signup(inputAccountData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
