import React from 'react';
import Logo from '../components/Logo';
import AuthenticationForm from '../components/AuthenticationForm';
import { useLocation } from 'react-router-dom';

function Authentication() {
  const { pathname } = useLocation();

  return (
    <>
      <Logo size="big" />
      {pathname === '/register' && <AuthenticationForm authType="register" />}
      {pathname === '/login' && <AuthenticationForm authType="login" />}
    </>
  );
}

export default Authentication;
