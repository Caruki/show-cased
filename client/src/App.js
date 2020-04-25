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
import useAuth from './contexts/auth/useAuth';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <UserProvider>
      <AuthProvider>
        <Router>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <BasicLayoutRoute exact path="/login" component={Authentication} />
            <BasicLayoutRoute
              exact
              path="/register"
              component={Authentication}
            />
            {isAuthenticated ? (
              <UserRoutes />
            ) : (
              <Route path="/">
                <Redirect to="/login" />
              </Route>
            )}
          </Switch>
        </Router>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
