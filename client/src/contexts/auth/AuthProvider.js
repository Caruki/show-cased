import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import logoutUser from '../../api/users';
import UserContext from '../user/UserContext';

function AuthProvider({ children }) {
  const { setUser } = useContext(UserContext);

  async function logout() {
    try {
      const loggedOutConfirmation = await logoutUser();
      setUser(null);
      if (loggedOutConfirmation) {
        alert('You are logged out!');
        history.push('/');
      }
    } catch (error) {
      return error.message;
    }
  }

  const authContextValue = {
    logout,
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
