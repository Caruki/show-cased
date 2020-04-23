import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BasicLayoutRoute from './BasicLayoutRoute';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

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
  return (
    <BasicLayoutRoute
      {...rest}
      component={(matchProps) => (
        <>
          <Header />
          <MainContainer>
            <Component {...matchProps} />
          </MainContainer>
          <BottomNav />
        </>
      )}
    />
  );
};

HeaderBottomNavLayoutRoute.propTypes = {
  component: PropTypes.elementType,
};

export default HeaderBottomNavLayoutRoute;
