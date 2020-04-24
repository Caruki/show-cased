import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import UserProvider from './contexts/user/UserProvider';
import AuthProvider from './contexts/auth/AuthProvider';
import GlobalStyles from './GlobalStyles';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
import Authentication from './pages/Authentication';
import BasicLayoutRoute from './layoutRoutes/BasicLayoutRoute';
import HeaderBottomNavLayoutRoute from './layoutRoutes/HeaderBottomNavLayoutRoute';
import HeaderSideBottomNavLayoutRoute from './layoutRoutes/HeaderSideBottomNavLayoutRoute';

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <BasicLayoutRoute exact path="/login" component={Authentication} />
            <BasicLayoutRoute
              exact
              path="/register"
              component={Authentication}
            />
            <HeaderSideBottomNavLayoutRoute
              exact
              path="/popular"
              component={Popular}
              site="popular"
            />
            <HeaderBottomNavLayoutRoute exact path="/recs" component={Recs} />
            <HeaderSideBottomNavLayoutRoute
              exact
              path="/lists"
              component={Lists}
              site="lists"
            />
            <BasicLayoutRoute path="/" Redirect to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
