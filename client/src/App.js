import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';
import Login from './pages/Login';
import Register from './pages/Register';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
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
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
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
