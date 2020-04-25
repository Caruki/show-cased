import React, { useState } from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import { logoutUser } from '../../api/users';
import useUserInformation from '../user/useUserInformation';

function AuthProvider({ children }) {
  const { setUser } = useUserInformation;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function logout() {
    try {
      const loggedOutConfirmation = await logoutUser();
      setUser(null);
      setIsAuthenticated(false);
      return loggedOutConfirmation;
    } catch (error) {
      return error.message;
    }
  }

  const authContextValue = {
    logout,
    setIsAuthenticated,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
