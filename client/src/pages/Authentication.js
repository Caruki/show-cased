import React from 'react';
import Logo from '../components/Logo';
import AuthenticationForm from '../components/PageMainContent/AuthenticationForm';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    props.authType === '/register'
      ? "url('/bg-signup.png')"
      : "url('/bg-login.png')"};
  background-size: cover;
  background-position: center;
  background: contain;
  overflow: auto;
  @media (m: 700px) {
    width: 45%;
    height: 50%;
    justify-content: space-evenly;
    margin: 0;
  }
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
