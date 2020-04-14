import React from 'react';
import styled from '@emotion/styled';
import SubmitButton from '../components/SubmitButton';

export default {
  title: 'Buttons',
};

const AppContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: rgba(14, 5, 46, 1);
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const SignUpButton = () => {
  return (
    <AppContainer>
      <MainContainer>
        <SubmitButton>Sign Up</SubmitButton>
      </MainContainer>
    </AppContainer>
  );
};

export const LogInButton = () => {
  return (
    <AppContainer>
      <MainContainer>
        <SubmitButton>Log In</SubmitButton>
      </MainContainer>
    </AppContainer>
  );
};
