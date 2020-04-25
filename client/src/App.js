import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import UserProvider from './contexts/user/UserProvider';
import AuthProvider from './contexts/auth/AuthProvider';
import GlobalStyles from './GlobalStyles';
import Authentication from './pages/Authentication';
import BasicLayoutRoute from './layoutRoutes/BasicLayoutRoute';
import UserRoutes from './UserRoutes';

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
            <UserRoutes />
          </Switch>
        </Router>
      </AuthProvider>
    </UserProvider>
  );
}

export default App;
