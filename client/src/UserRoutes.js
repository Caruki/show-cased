import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
import HeaderBottomNavLayoutRoute from './layoutRoutes/HeaderBottomNavLayoutRoute';
import HeaderSideBottomNavLayoutRoute from './layoutRoutes/HeaderSideBottomNavLayoutRoute';
import useAuth from './contexts/auth/useAuth';

function UserRoutes() {
  const { authenticatedUser } = useAuth();

  return (
    <>
      {authenticatedUser && (
        <Switch>
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
          <Route path="/">
            <Redirect to="/popular" />
          </Route>
        </Switch>
      )}
      {!authenticatedUser && (
        <Switch>
          <Route path="/login">
            <Redirect to="/login" />
          </Route>
          <Route path="/register">
            <Redirect to="/register" />
          </Route>
          <Route path="/">
            <Redirect to="/register" />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default UserRoutes;
