import { useState } from 'react';

const useBottomNav = () => {
  const [activeNavItem, setActiveNavItem] = useState('');

  function onNavItemClick(activeLabel) {
    setActiveNavItem(activeLabel);
  }

  return {
    activeNavItem,
    onNavItemClick,
  };
};

export default useBottomNav;
