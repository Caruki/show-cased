import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Tab from './Tab';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';

const TabsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 30px;
  flex-basis: 20%;
  margin-right: 10px;
`;

function TabSideNavigation({ children }) {
  const { setTabContent } = useSideNavInformation();
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  function handleClickTabItem(tab) {
    setActiveTab(tab);
    setTabContent(tab);
  }

  return (
    <TabsContainer>
      {children.map((child) => {
        const { label } = child.props;

        return (
          <Tab
            activeTab={activeTab}
            key={label}
            label={label}
            onClick={handleClickTabItem}
          />
        );
      })}
    </TabsContainer>
  );
}

TabSideNavigation.propTypes = {
  children: PropTypes.array,
};

export default TabSideNavigation;
