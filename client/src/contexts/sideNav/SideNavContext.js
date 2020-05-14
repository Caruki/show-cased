import { createContext } from 'react';

function noop() {}

export const UserContext = createContext({
  tabContent: 'default',
  setTabContent: noop,
  searchActive: false,
  toggleSearchActive: noop,
});

export default UserContext;
