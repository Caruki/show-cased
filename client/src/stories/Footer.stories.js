import React from 'react';
import Footer from '../components/Footer';
import styled from '@emotion/styled';

export default {
  title: 'Footer',
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

export const FooterPopular = () => {
  return (
    <AppContainer>
      <MainContainer />
      <Footer site="popular" />
    </AppContainer>
  );
};

export const FooterRecs = () => {
  return (
    <AppContainer>
      <MainContainer />
      <Footer site="recs" />
    </AppContainer>
  );
};

export const FooterLists = () => {
  return (
    <AppContainer>
      <MainContainer />
      <Footer site="lists" />
    </AppContainer>
  );
};
