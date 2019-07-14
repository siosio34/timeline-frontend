import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { Button } from 'antd';
import { Input, FormItem, Form } from '@jbuschke/formik-antd';

import {
  AccountActionTypes,
  AccountActionCreators,
} from 'store/account/account.action';
import createLoadingSelector from 'utils/createLoadingSelector';

const InitialValue = {
  email: '',
  password: '',
  username: '',
  city: '',
  state: '',
};

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('해당 항목을 입력해 주세요'),
  password: Yup.string().required('해당 항목을 입력해 주세요'),
  username: Yup.string().required('해당 항목을 입력해 주세요'),
  city: Yup.string().required('해당 항목을 입력해 주세요'),
  state: Yup.string().required('해당 항목을 입력해 주세요'),
});

class SignUpForm extends React.Component {
  render() {
    const { loading } = this.props;
    const { signup } = this.props;

    return (
      <div>
        <Formik
          initialValues={InitialValue}
          validationSchema={SignupSchema}
          onSubmit={values => {
            signup(values);
          }}
          render={() => (
            <Form>
              <FormItem name="email">
                <Input name="email" type="email" />
              </FormItem>
              <FormItem name="password">
                <Input.Password name="password" />
              </FormItem>
              <FormItem name="username">
                <Input name="username" />
              </FormItem>
              <FormItem name="city">
                <Input name="city" />
              </FormItem>
              <FormItem name="state">
                <Input name="state" />
              </FormItem>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                disabled={loading}
              >
                회원가입하기
              </Button>
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
