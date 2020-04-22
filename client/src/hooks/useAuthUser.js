import { useState } from 'react';
import { createUser, authUser } from '../api/users';

export default function useAuthUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);

  async function register({ userInput }) {
    console.log(userInput);
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
    return;
  }

  async function login({ userInput }) {
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
    return;
  }

  return [{ success, error, loading }, register, login];
}
