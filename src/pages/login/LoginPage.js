import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from './loginForm';
import './LoginPage.css';

class LoginPage extends React.Component {
  componentDidMount() {}

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

export default LoginPage;
