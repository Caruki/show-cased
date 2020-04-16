import React from 'react';
import AuthenticationForm from '../components/AuthenticationForm';
import styled from '@emotion/styled';

export default {
  title: 'Authentication Form',
};

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(14, 5, 46, 1);
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const SignInForm = () => {
  return (
    <AppContainer>
      <MainContainer>
        <AuthenticationForm
          buttonText="Log in"
          accountQuestion="Don't have an account?"
          anchor="/signup"
          linkTo="Sign Up"
          accountAnswer="Sign Up"
        />
      </MainContainer>
    </AppContainer>
  );
};

export const SignUpForm = () => {
  return (
    <AppContainer>
      <MainContainer>
        <AuthenticationForm
          buttonText="Sign Up"
          accountQuestion="Already have an account?"
          anchor="/login"
          linkTo="Log In"
          accountAnswer="Log In"
        />
      </MainContainer>
    </AppContainer>
  );
};
