import React from 'react';
import Header from '../components/Header';
import styled from '@emotion/styled';

export default {
  title: 'Header',
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

export const HeaderEverySite = () => {
  return (
    <AppContainer>
      <MainContainer>
        <Header username={'Everyone'} />
      </MainContainer>
    </AppContainer>
  );
};
