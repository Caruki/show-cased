import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Tab from './Tab';
import useSideNavInformation from '../contexts/sideNav/useSideNavInformation';
import SearchIcon from '../assets/SearchIcon';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 30px;
  flex-basis: 20%;
  margin-right: 10px;
  flex-grow: 1;
`;

const SearchIconContainer = styled.div`
  margin: 10px;
  padding-top: 20px;
`;

function TabSideNavigation({ children }) {
  const {
    setTabContent,
    toggleSearchActive,
    searchActive,
  } = useSideNavInformation();
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  useEffect(() => {
    setTabContent('default');
  }, []);

  function handleClickSearch() {
    toggleSearchActive();
  }

  function handleClickTabItem(tab) {
    setActiveTab(tab);
    setTabContent(tab);
  }

  return (
    <Container>
      <SearchIconContainer>
        <SearchIcon active={searchActive} onClick={handleClickSearch} />
      </SearchIconContainer>
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
    </Container>
  );
}

TabSideNavigation.propTypes = {
  children: PropTypes.array,
};

export default TabSideNavigation;
