import React from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import logoutUser from '../../api/users';
import useUserInformation from '../user/useUserInformation';

function AuthProvider({ children }) {
  const { setUser } = useUserInformation;

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
