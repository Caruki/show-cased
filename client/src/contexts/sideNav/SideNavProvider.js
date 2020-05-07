import React, { useState } from 'react';
import SideNavContext from './SideNavContext';
import PropTypes from 'prop-types';

function SideNavProvider({ children }) {
  const [tabContent, setTabContent] = useState('default');
  const [searchActive, setSearchActive] = useState(false);

  function toggleSearchActive() {
    setSearchActive(!searchActive);
  }

  const sideNavContextValue = {
    tabContent,
    setTabContent,
    searchActive,
    toggleSearchActive,
  };

  return (
    <SideNavContext.Provider value={sideNavContextValue}>
      {children}
    </SideNavContext.Provider>
  );
}

SideNavProvider.propTypes = {
  children: PropTypes.node,
};

export default SideNavProvider;
