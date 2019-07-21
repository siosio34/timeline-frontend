import React from 'react';
import { Link } from 'react-router-dom';
import SigninForm from './signinForm';
import './SignInPage.css';

class SignInPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ padding: '50px', maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{textAlign: 'center'}}>로그인</h1>
        <SigninForm />
        <div className="register-link">
          아직 회원이 아니라면 <Link to="/register">회원가입</Link>해주세요.
        </div>
      </div>
    );
  }
}

export default SignInPage;
