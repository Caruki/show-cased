import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
import HeaderBottomNavLayoutRoute from './layoutRoutes/HeaderBottomNavLayoutRoute';
import HeaderSideBottomNavLayoutRoute from './layoutRoutes/HeaderSideBottomNavLayoutRoute';
import useAuth from './contexts/auth/useAuth';

function UserRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && (
        <>
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
        </>
      )}
      {!isAuthenticated && (
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      )}
    </>
  );
}

export default UserRoutes;
