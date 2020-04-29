import { useContext } from 'react';
import SideNavContext from './SideNavContext';

function useSideNavInformation() {
  return useContext(SideNavContext);
}

export default useSideNavInformation;
