import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
import Authentication from './pages/Authentication';
// import Header from './components/Header';
// import BottomNav from './components/BottomNav';

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
  align-items: center;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <AppContainer>
          <MainContainer>
            <Switch>
              <Route exact path="/login">
                <Authentication />
              </Route>
              <Route exact path="/register">
                <Authentication />
              </Route>
              <Route exact path="/popular">
                <Popular />
              </Route>
              <Route exact path="/recs">
                <Recs />
              </Route>
              <Route exact path="/lists">
                <Lists />
              </Route>
            </Switch>
          </MainContainer>
          {/* <BottomNav /> */}
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
