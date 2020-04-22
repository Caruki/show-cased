import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
import Authentication from './pages/Authentication';
import BasicLayout from './layouts/BasicLayout';
import HeaderBottomNavLayout from './layouts/HeaderBottomNavLayout';
import HeaderSideBottomNavLayout from './layouts/HeaderSideBottomNavLayout';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <BasicLayout exact path="/login" component={Authentication} />
          <BasicLayout exact path="/register" component={Authentication} />
          <HeaderSideBottomNavLayout
            exact
            path="/popular"
            component={Popular}
            site="popular"
          />
          <HeaderBottomNavLayout exact path="/recs" component={Recs} />
          <HeaderSideBottomNavLayout
            exact
            path="/lists"
            component={Lists}
            site="lists"
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
