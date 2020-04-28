import React, { useState } from 'react';
import SideNavContext from './SideNavContext';
import PropTypes from 'prop-types';

function SideNavProvider({ children }) {
  const [tabContent, setTabContent] = useState('default');

  const sideNavContextValue = {
    tabContent,
    setTabContent,
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
