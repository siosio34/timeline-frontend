import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AccountActionCreators } from 'store/account/account.action';
import { connect } from 'react-redux';
import LoginForm from './loginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
  componentDidMount() {
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <div style={{ padding: '50px', maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center' }}>로그인</h1>
        <LoginForm />
        <div className="register-link">
          아직 회원이 아니라면 <Link to="/register">회원가입</Link>해주세요.
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(AccountActionCreators.logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
