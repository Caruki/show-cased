import React from 'react';
import GlobalStyles from '../src/GlobalStyles';
import styled from '@emotion/styled';

const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(2, 0, 36, 1);
  height: 100vh;
  width: 100vw;
`;
const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  max-height: 1024px;
  max-width: 768px;
`;

const LayoutContainer = styled.div`
  background-color: rgba(14, 5, 46, 1);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const AppEnvironmentDecorator = (storyFn) => (
  <BackgroundContainer>
    <AppContainer>
      <GlobalStyles />
      <LayoutContainer>{storyFn()}</LayoutContainer>
    </AppContainer>
  </BackgroundContainer>
);

export default AppEnvironmentDecorator;
