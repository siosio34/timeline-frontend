import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Button, Row, Col } from 'antd';
import { Input, FormItem, Form, Select } from '@jbuschke/formik-antd';
import { SearchInput } from 'components';

import {
  AccountActionTypes,
  AccountActionCreators,
} from 'store/account/account.action';
import AccountSelector from 'store/account/account.select';
import createLoadingSelector from 'utils/createLoadingSelector';

import './RegisterForm.css';

const { Option } = Select;

const InitialValue = {
  email: '',
  password: '',
  username: '',
  state: '',
  school: '',
  birth: '',
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required('해당 항목을 입력해 주세요.')
    .email('이메일 형식으로 입력해주세요'),
  password: Yup.string()
    .min(10, '최소 10자 이상 입력해주세요.')
    .required('해당 항목을 입력해 주세요.'),
  username: Yup.string().required('해당 항목을 입력해 주세요.'),
  state: Yup.string().required('해당 항목을 선택해 주세요.'),
  school: Yup.string().required('해당 항목을 입력해 주세요.'),
  birth: Yup.string()
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

class RegisterForm extends React.Component {
  render() {
    const { registerLoading, checkDuplicateLoading } = this.props;
    const { register, checkDuplicateEmail } = this.props;

    return (
      <div className="register-form">
        <Formik
          initialValues={InitialValue}
          validationSchema={RegisterSchema}
          onSubmit={values => {
            register(values);
          }}
          render={() => (
            <Form {...formItemLayout}>
              <FormItem label="이메일" name="email">
                <SearchInput
                  name="email"
                  onSearch={checkDuplicateEmail}
                  loading={checkDuplicateLoading}
                  buttonText="중복체크하기"
                />
              </FormItem>
              <FormItem label="패스워드" name="password">
                <Input.Password name="password" />
              </FormItem>
              <FormItem label="이름" name="username">
                <Input name="username" />
              </FormItem>
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
              <Row className="register-submit">
                <Col span={4} offset={16}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={registerLoading}
                    disabled={registerLoading}
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

RegisterForm.propTypes = {
  registerLoading: PropTypes.bool.isRequired,
  checkDuplicateLoading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  checkDuplicateEmail: PropTypes.func.isRequired,
};

const registerLoadingSelector = createLoadingSelector([
  AccountActionTypes.REGISTER.BASE,
]);

const checkDuplicateLoadingSelector = createLoadingSelector(
  AccountActionTypes.CHECK_DUPLICATE_EMAIL.BASE,
);

const mapStateToProps = state => ({
  registerLoading: registerLoadingSelector(state),
  checkDuplicateLoading: checkDuplicateLoadingSelector(state),
  isDuplicatedEmail: AccountSelector.isDuplicateEmail(state),
});

const mapDispatchToProps = dispatch => ({
  register: inputAccountData =>
    dispatch(AccountActionCreators.register(inputAccountData)),
  checkDuplicateEmail: email =>
    dispatch(AccountActionCreators.checkDuplicateEmail(email)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
