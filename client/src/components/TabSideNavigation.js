import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Tab from './Tab';

const TabsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 30px;
`;

const TabContent = styled.div``;

function TabSideNavigation({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  function handleClickTabItem(tab) {
    setActiveTab(tab);
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

      <TabContent>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </TabContent>
    </TabsContainer>
  );
}

TabSideNavigation.propTypes = {
  children: PropTypes.array,
};

export default TabSideNavigation;
