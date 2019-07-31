import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Icon, Button } from 'antd';
import { Input, FormItem, Form } from '@jbuschke/formik-antd';

import {
  AccountActionTypes,
  AccountActionCreators,
} from 'store/account/account.action';
import createLoadingSelector from 'utils/createLoadingSelector';
import './LoginForm.css';

const InitialValue = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('아이디를 입력해 주세요.'),
  password: Yup.string().required('패스워드를 입력해 주세요.'),
});

class LoginForm extends React.Component {
  render() {
    const { loading } = this.props;
    const { login } = this.props;

    return (
      <div className="login-form">
        <Formik
          initialValues={InitialValue}
          validationSchema={LoginSchema}
          onSubmit={values => {
            login(values);
          }}
          render={() => (
            <Form>
              <FormItem name="email">
                <Input
                  name="email"
                  type="email"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="이메일 아이디"
                />
              </FormItem>
              <FormItem name="password">
                <Input
                  name="password"
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="비밀번호"
                />
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
            </Form>
          )}
        />
      </div>
    );
  }
}

LoginForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
};

const loginLoadingSelector = createLoadingSelector([
  AccountActionTypes.LOGIN.BASE,
]);

const mapStateToProps = state => ({
  loading: loginLoadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  login: inputAccountData =>
    dispatch(AccountActionCreators.login(inputAccountData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
