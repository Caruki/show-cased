import React from 'react';
import Logo from '../components/Logo';
import AuthenticationForm from '../components/AuthenticationForm';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  margin-top: -5px;
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.authType === '/register'
      ? "url('/bg-signup.png')"
      : "url('/bg-login.png')"};
  background-size: cover;
  background-position: top;
  background: cover;
`;

function Authentication() {
  const { pathname } = useLocation();

  return (
    <BackgroundContainer authType={pathname}>
      <Logo size="big" />
      {pathname === '/register' && <AuthenticationForm authType="register" />}
      {pathname === '/login' && <AuthenticationForm authType="login" />}
    </BackgroundContainer>
  );
}

export default Authentication;
