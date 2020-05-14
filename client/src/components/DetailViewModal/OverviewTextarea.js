import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  font: 300 0.7rem 'Roboto', sans-serif;
  color: #e7eaff;
  align-self: center;
  text-align: center;
  max-width: 500px;
  line-height: 15px;
  margin: 5px 10px;
  flex-grow: 0 1 90px;
`;

function OverviewTextarea({ showOverview }) {
  return <Container>{showOverview}</Container>;
}

OverviewTextarea.propTypes = {
  showOverview: PropTypes.string,
};

export default OverviewTextarea;
