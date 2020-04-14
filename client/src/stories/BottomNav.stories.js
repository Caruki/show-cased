import React from 'react';
import BottomNav from '../components/BottomNav';
import styled from '@emotion/styled';

export default {
  title: 'BottomNav',
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
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

export const BottomNavPopular = () => {
  return (
    <AppContainer>
      <MainContainer />
      <BottomNav site="popular" />
    </AppContainer>
  );
};

export const BottomNavRecs = () => {
  return (
    <AppContainer>
      <MainContainer />
      <BottomNav site="recs" />
    </AppContainer>
  );
};

export const BottomNavLists = () => {
  return (
    <AppContainer>
      <MainContainer />
      <BottomNav site="lists" />
    </AppContainer>
  );
};
