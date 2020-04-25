import React from 'react';
import Popular from './pages/Popular';
import Recs from './pages/Recs';
import Lists from './pages/Lists';
import HeaderBottomNavLayoutRoute from './layoutRoutes/HeaderBottomNavLayoutRoute';
import HeaderSideBottomNavLayoutRoute from './layoutRoutes/HeaderSideBottomNavLayoutRoute';

function UserRoutes() {
  return (
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
  );
}

export default UserRoutes;
