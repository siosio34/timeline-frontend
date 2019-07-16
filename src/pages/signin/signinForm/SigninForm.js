import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Icon, Button, Checkbox } from 'antd';
import { Input, FormItem, Form } from '@jbuschke/formik-antd';

import {
  AccountActionTypes,
  AccountActionCreators,
} from 'store/account/account.action';
import createLoadingSelector from 'utils/createLoadingSelector';
import './SigninForm.css';

const InitialValue = {
  email: '',
  password: '',
  remember: false,
};

const SigninSchema = Yup.object().shape({
  email: Yup.string().required('아이디를 입력해 주세요.'),
  password: Yup.string().required('패스워드를 입력해 주세요.'),
  remember: Yup.boolean(),
});

class SignInForm extends React.Component {
  render() {
    const { loading } = this.props;
    const { signin } = this.props;

    return (
      <div className="signin-form">
        <Formik
          initialValues={InitialValue}
          validationSchema={SigninSchema}
          onSubmit={values => {
            signin(values);
          }}
          render={() => (
            <Form>
              <FormItem name="email">
                <Input
                  name="email"
                  type="email"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="이메일 아이디"
                />
              </FormItem>
              <FormItem name="password">
                <Input
                  name="password"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="비밀번호"
                />
              </FormItem>
              <FormItem name="remember">
                <Checkbox name="remember">자동로그인</Checkbox>
                <Link className="login-form-forgot" to="/">
                  비밀번호 찾기
                </Link>
              </FormItem>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                disabled={loading}
                className="login-form-button"
              >
                로그인
              </Button>
              <div className="register-link">
                아직 회원이 아니라면 <Link to="/join">회원가입</Link>해주세요.
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}

SignInForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  signin: PropTypes.func.isRequired,
};

const signinLoadingSelector = createLoadingSelector([
  AccountActionTypes.SIGNIN.BASE,
]);

const mapStateToProps = state => ({
  loading: signinLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  signin: inputAccountData =>
    dispatch(AccountActionCreators.signin(inputAccountData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);