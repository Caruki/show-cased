import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BasicLayoutRoute from './BasicLayoutRoute';
import Header from '../components/Layout/Header';
import BottomNav from '../components/Layout/BottomNav';
import { Lists, Popular, Recs } from '../assets/icons/BottomIcons';
import { useLocation } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex: 1;
  overflow: auto;
  width: 100%;
  padding-bottom: 80px;
`;

const HeaderBottomNavLayoutRoute = ({ component: Component, ...rest }) => {
  const { pathname } = useLocation();

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
                icon: Popular,
                navLink: '/popular',
              },
              {
                label: 'Recs',
                icon: Recs,
                navLink: '/recs',
              },
              { label: 'Lists', icon: Lists, navLink: '/lists' },
            ]}
            activeNavItem={pathname}
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
