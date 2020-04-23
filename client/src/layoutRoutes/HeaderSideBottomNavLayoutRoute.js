import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import TabSideNavigation from '../components/TabSideNavigation';
import BasicLayoutRoute from './BasicLayoutRoute';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex-grow: 1;
  flex-basis: 80%;
  overflow: auto;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100%;
`;

const HeaderSideBottomNavLayoutRoute = ({
  site,
  component: Component,
  ...rest
}) => {
  return (
    <BasicLayoutRoute
      {...rest}
      component={(matchProps) => (
        <>
          <Header />
          <Container>
            <TabSideNavigation>
              <div label={site === 'recs' ? 'Trending' : 'Watched'}>
                <div></div>
              </div>
              <div label={site === 'recs' ? 'Newest' : 'ToWatch'}>
                <div></div>
              </div>
            </TabSideNavigation>
            <MainContainer>
              <Component {...matchProps} />
            </MainContainer>
          </Container>
          <BottomNav />
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