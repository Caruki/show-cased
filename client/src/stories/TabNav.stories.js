import React from 'react';
import styled from '@emotion/styled';
import TabSideNavigation from '../components/TabSideNavigation';

export default {
  title: 'Side Navigation',
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

export const SideNavPopular = () => {
  return (
    <AppContainer>
      <TabSideNavigation>
        <div label="Trending">
          <div></div>
        </div>
        <div label="Newest">
          <div></div>
        </div>
      </TabSideNavigation>
      <MainContainer />
    </AppContainer>
  );
};

export const SideNavRecs = () => {
  return (
    <AppContainer>
      <TabSideNavigation>
        <div label="Watched">
          <div></div>
        </div>
        <div label="ToWatch">
          <div></div>
        </div>
      </TabSideNavigation>
      <MainContainer />
    </AppContainer>
  );
};
