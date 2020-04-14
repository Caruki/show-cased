import React from 'react';
import styled from '@emotion/styled';
import Tabs from '../components/Tabs';

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

export const SideNavButtonPopular = () => {
  return (
    <AppContainer>
      <Tabs>
        <div label="Trending">
          <div></div>
        </div>
        <div label="Newest">
          <div></div>
        </div>
      </Tabs>
      <MainContainer />
    </AppContainer>
  );
};

export const SideNavButtonRecs = () => {
  return (
    <AppContainer>
      <Tabs>
        <div label="Watched">
          <p>Your watched shows</p>
        </div>
        <div label="ToWatch">
          <p>Your to watch shows</p>
        </div>
      </Tabs>
      <MainContainer />
    </AppContainer>
  );
};
