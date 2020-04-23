import React, { useState } from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function saveUser(user) {
    setUser(user);
  }

  const authContextValue = {
    user,
    saveUser,
  };

  return (
    <UserContext.Provider value={authContextValue}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
