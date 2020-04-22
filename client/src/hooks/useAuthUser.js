import { useState } from 'react';
import { createUser, authUser } from '../api/users';

export default function useAuthUser({ authType, userInput }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);

  async function checkUser() {
    if (authType === 'register') {
      try {
        setLoading(true);
        setError(false);
        const response = await createUser(userInput);
        if (response) {
          setSuccess(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    if (authType === 'login') {
      try {
        setLoading(true);
        setError(false);
        const response = await authUser(userInput);
        if (response) {
          setSuccess(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }
  return [{ success, error, loading }, checkUser];
}
