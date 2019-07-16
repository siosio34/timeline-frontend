import React from 'react';

import SignupForm from './signupForm';

class SignUpPage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <h1 style={{textAlign: 'center'}}>회원가입</h1>
        <SignupForm />
      </div>
    );
  }
}

export default SignUpPage;
