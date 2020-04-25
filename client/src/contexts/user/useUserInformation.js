import { useContext } from 'react';
import UserContext from './UserContext';

function useUserInformation() {
  return useContext(UserContext);
}

export default useUserInformation;
