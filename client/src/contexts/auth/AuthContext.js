import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  logout: noop,
  login: noop,
  authenticatedUser: false,
});

export default AuthContext;
