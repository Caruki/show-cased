import React from 'react';
import styled from '@emotion/styled';
import SubmitButton from '../components/SubmitButton';
import SideNavigation from '../components/SideNavigation';

export default {
  title: 'Buttons',
};

const AppContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: rgba(14, 5, 46, 1);
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
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

export const SideNavButtonPopular = () => {
  return (
    <AppContainer>
      <SideNavigation site="popular" />
      <MainContainer />
    </AppContainer>
  );
};

export const SideNavButtonRecs = () => {
  return (
    <AppContainer>
      <SideNavigation site="recs" clicked={true} />
      <MainContainer />
    </AppContainer>
  );
};
