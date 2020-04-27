import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BasicLayoutRoute from './BasicLayoutRoute';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { Lists, Popular, Recs } from '../assets/BottomIcons';

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
  const [active, setActive] = useState('Popular');

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
            value={active}
            onTabClick={(page) => setActive(page)}
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
