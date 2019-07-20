import React from 'react';

import RegisterForm from './registerForm';

class RegisterPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center' }}>회원가입</h1>
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterPage;
