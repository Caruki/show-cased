import { createContext } from 'react';

function noop() {}

export const AuthContext = createContext({
  logout: noop,
  setIsAuthenticated: noop,
  isAuthenticated: false,
});

export default AuthContext;
