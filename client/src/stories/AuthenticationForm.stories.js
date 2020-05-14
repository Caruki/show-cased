import React from 'react';
import AuthenticationForm from '../components/PageMainContent/AuthenticationForm';

export default {
  title: 'Authentication Form',
};

export const SignIn = () => {
  return <AuthenticationForm authType="login" />;
};

export const SignUp = () => {
  return <AuthenticationForm authType="register" />;
};
