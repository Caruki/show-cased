import React, { useState } from 'react';
import UserContext from './UserContext';
import PropTypes from 'prop-types';

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const authContextValue = {
    user,
    setUser,
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
