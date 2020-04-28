import useAuth from './useAuth';
import { getUser } from '../../api/users';

async function useUserInformation() {
  const { authenticatedUser } = useAuth();
  try {
    const user = await getUser(authenticatedUser.userId);
    return user;
  } catch (error) {
    return error.message;
  }
}

export default useUserInformation;
