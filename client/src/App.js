import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthProvider from './contexts/auth/AuthProvider';
import GlobalStyles from './GlobalStyles';
import Authentication from './pages/Authentication';
import BasicLayoutRoute from './layoutRoutes/BasicLayoutRoute';
import UserRoutes from './UserRoutes';
import SideNavProvider from './contexts/sideNav/SideNavProvider';
import ToastNotificationConfig from './utils/ToastNotificationConfig';

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <ToastNotificationConfig />
        <Switch>
          <BasicLayoutRoute exact path="/login" component={Authentication} />
          <BasicLayoutRoute exact path="/register" component={Authentication} />
          <SideNavProvider>
            <UserRoutes />
          </SideNavProvider>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
