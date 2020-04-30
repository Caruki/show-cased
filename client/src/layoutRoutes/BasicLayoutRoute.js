import React from 'react';
import { Route } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const LayoutContainer = styled.div`
  background-color: rgba(14, 5, 46, 1);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BasicLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <AppContainer>
          <LayoutContainer>
            <Component {...matchProps} />
          </LayoutContainer>
        </AppContainer>
      )}
    />
  );
};

BasicLayoutRoute.propTypes = {
  component: PropTypes.elementType,
};

export default BasicLayoutRoute;
