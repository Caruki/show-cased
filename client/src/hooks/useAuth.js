import { useState, useCallback } from 'react';
import { loginUser } from '../api/users';

export const useAuth = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();

  const login = useCallback((userInformation) => {
    loginUser(userInformation).then((user) => {
      setUser(user);
      setToken(user.userToken);
    });
  }, []);

  return { login, token, user };
};
