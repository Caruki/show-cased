import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import styled from '@emotion/styled';

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

const AppEnvironmentDecorator = (storyFn) => (
  <AppContainer>
    <GlobalStyles />
    <MainContainer>{storyFn()}</MainContainer>
  </AppContainer>
);

export default AppEnvironmentDecorator;
