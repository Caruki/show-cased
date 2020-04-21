import React from 'react';
import Logo from '../components/Logo';
import AuthenticationForm from '../components/AuthenticationForm';

function Register() {
  return (
    <>
      <Logo size="big" />
      <AuthenticationForm
        buttonText="Sign Up"
        accountQuestion="Already have an account?"
        anchor="/login"
        linkTo="Log In"
        accountAnswer="Log In"
      />
    </>
  );
}

export default Register;
