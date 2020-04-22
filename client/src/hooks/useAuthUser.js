import { useState } from 'react';
import { signupUser, loginUser } from '../api/users';

export default function useAuthUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(null);

  async function register({ userInput }) {
    try {
      setLoading(true);
      const response = await signupUser(userInput);
      if (response) {
        setSuccess(true);
        return response;
      } else if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function login({ userInput }) {
    try {
      setLoading(true);
      const response = await loginUser(userInput);
      if (response) {
        setSuccess(true);
        return response;
      } else if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return [{ success, error, loading }, register, login];
}
