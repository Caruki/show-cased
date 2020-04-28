import React from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import { logoutUser, loginUser } from '../../api/users';
import usePersistentState from '../../hooks/usePersistentState';

function AuthProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = usePersistentState(
    'authenticatedUser',
    false
  );

  async function logout() {
    try {
      setAuthenticatedUser(false);
      await logoutUser();
    } catch (error) {
      console.error(error.message);
    }
  }

  async function login(userInput) {
    const user = await loginUser(userInput);
    setAuthenticatedUser(user);
    return user;
  }

  React.useEffect(() => {
    if (!authenticatedUser) {
      setAuthenticatedUser(false);
    } else {
      setAuthenticatedUser(authenticatedUser);
    }
  }, [authenticatedUser, setAuthenticatedUser]);

  const authContextValue = {
    logout,
    login,
    authenticatedUser,
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
