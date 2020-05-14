import React from 'react';
import AuthenticationForm from '../components/PageMainContent/AuthenticationForm';

export default {
  title: 'Authentication Form',
};

export const SignInForm = () => {
  return (
    <AuthenticationForm
      buttonText="Log in"
      accountQuestion="Don't have an account?"
      anchor="/signup"
      linkTo="Sign Up"
      accountAnswer="Sign Up"
    />
  );
};

export const SignUpForm = () => {
  return (
    <AuthenticationForm
      buttonText="Sign Up"
      accountQuestion="Already have an account?"
      anchor="/login"
      linkTo="Log In"
      accountAnswer="Log In"
    />
  );
};
