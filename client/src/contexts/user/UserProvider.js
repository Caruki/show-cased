import React, { useState } from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const userContextValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
