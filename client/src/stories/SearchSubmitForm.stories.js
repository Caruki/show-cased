import React from 'react';
import styled from '@emotion/styled';
import SearchSubmitForm from '../components/SearchSubmitForm';

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

export default {
  title: 'Search for Shows Form',
};

export const ToWatchShows = () => {
  return (
    <AppContainer>
      <MainContainer>
        <SearchSubmitForm textvariation="want to watch" />
      </MainContainer>
    </AppContainer>
  );
};

export const WatchedShows = () => {
  return (
    <AppContainer>
      <MainContainer>
        <SearchSubmitForm textvariation="have watched" />
      </MainContainer>
    </AppContainer>
  );
};
