import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import UserProvider from './contexts/user/UserProvider';
import AuthProvider from './contexts/auth/AuthProvider';
import GlobalStyles from './GlobalStyles';
import Authentication from './pages/Authentication';
import BasicLayoutRoute from './layoutRoutes/BasicLayoutRoute';
import UserRoutes from './UserRoutes';
import SideNavProvider from './contexts/sideNav/SideNavProvider';

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
            <SideNavProvider>
              <UserRoutes />
            </SideNavProvider>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
