import React from 'react';

import SigninForm from './signinForm';

class SignInPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ padding: '50px', maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{textAlign: 'center'}}>로그인</h1>
        <SigninForm />
      </div>
    );
  }
}

export default SignInPage;
