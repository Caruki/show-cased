import React, { useState } from 'react';
import AuthContext from './AuthContext';
import PropTypes from 'prop-types';
import { loginUser } from '../../api/users';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  function login(userInformation) {
    try {
      loginUser(userInformation).then((user) => {
        setUser(user);
        setToken(user.userToken);
      });
    } catch (error) {
      return error.message;
    }
  }

  const authContextValue = {
    user,
    token,
    login,
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
