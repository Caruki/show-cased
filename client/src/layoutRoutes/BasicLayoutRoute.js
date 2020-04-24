import React from 'react';
import { Route } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const AppContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: rgba(14, 5, 46, 1);
  width: 100vw;
  height: 100vh;
`;

const BasicLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <AppContainer>
          <Component {...matchProps} />
        </AppContainer>
      )}
    />
  );
};

BasicLayoutRoute.propTypes = {
  component: PropTypes.elementType,
};

export default BasicLayoutRoute;
