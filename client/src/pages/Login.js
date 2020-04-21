import React from 'react';
import Logo from '../components/Logo';
import AuthenticationForm from '../components/AuthenticationForm';

function Login() {
  return (
    <>
      <Logo size="big" />
      <AuthenticationForm
        buttonText="Log in"
        accountQuestion="Don't have an account?"
        anchor="/register"
        linkTo="Sign Up"
        accountAnswer="Sign Up"
      />
    </>
  );
}

export default Login;
