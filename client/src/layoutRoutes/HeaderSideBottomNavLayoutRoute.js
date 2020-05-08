import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import TabSideNavigation from '../components/TabSideNavigation';
import BasicLayoutRoute from './BasicLayoutRoute';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Lists, Popular, Recs } from '../assets/BottomIcons';
import { useLocation } from 'react-router-dom';

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex-basis: 85%;
  @media (min-width: 700px) {
    flex-basis: 92%;
  }
  margin-left: 5px;
  overflow: auto;
  height: 100%;
  padding-bottom: 80px;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: auto;
`;

const HeaderSideBottomNavLayoutRoute = ({
  site,
  component: Component,
  ...rest
}) => {
  const { pathname } = useLocation();

  return (
    <BasicLayoutRoute
      {...rest}
      component={(matchProps) => (
        <>
          <Header />
          <Container>
            <TabSideNavigation>
              <div label={site === 'popular' ? 'Trending' : 'Watched'}></div>
              <div label={site === 'popular' ? 'Newest' : 'ToWatch'}></div>
            </TabSideNavigation>
            <MainContainer>
              <Component {...matchProps} />
            </MainContainer>
          </Container>
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

HeaderSideBottomNavLayoutRoute.propTypes = {
  component: PropTypes.elementType,
  site: PropTypes.string,
};

export default HeaderSideBottomNavLayoutRoute;
