import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import BasicLayout from './BasicLayout';
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

const HeaderBottomNavLayout = ({ component: Component, ...rest }) => {
  return (
    <BasicLayout
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

HeaderBottomNavLayout.propTypes = {
  component: PropTypes.elementType,
};

export default HeaderBottomNavLayout;
