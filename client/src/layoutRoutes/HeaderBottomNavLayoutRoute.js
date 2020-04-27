import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BasicLayoutRoute from './BasicLayoutRoute';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Lists, Popular, Recs } from '../assets/BottomIcons';
import useBottomNav from '../hooks/useBottomNav';

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex-grow: 1;
  overflow: auto;
  width: 100%;
  height: 100%;
`;

const HeaderBottomNavLayoutRoute = ({ component: Component, ...rest }) => {
  const { activeNavItem, onNavItemClick } = useBottomNav();
  return (
    <BasicLayoutRoute
      {...rest}
      component={(matchProps) => (
        <>
          <Header />
          <MainContainer>
            <Component {...matchProps} />
          </MainContainer>
          <BottomNav
            links={[
              {
                label: 'Popular',
                Icon: Popular,
                navLink: '/popular',
              },
              {
                label: 'Recs',
                Icon: Recs,
                navLink: '/recs',
              },
              { label: 'Lists', Icon: Lists, navLink: '/lists' },
            ]}
            activeNavItem={activeNavItem}
            onNavItemClick={onNavItemClick}
          />
        </>
      )}
    />
  );
};

HeaderBottomNavLayoutRoute.propTypes = {
  component: PropTypes.elementType,
};

export default HeaderBottomNavLayoutRoute;
