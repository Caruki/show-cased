import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  fill: ${(props) =>
    props.disabled ? 'rgba(174,178,245,0.5)' : 'rgba(174,178,245,1)'};
`;

export const GoBack = ({ disabled }) => {
  return (
    <SVG
      disabled={disabled}
      width="16.25"
      height="16.25"
      viewBox="0 0 16.25 16.25"
    >
      <path
        d="M11.77,5.766a.757.757,0,0,0-1.066,0L6.977,9.5a.753.753,0,0,0-.023,1.039l3.672,3.684a.753.753,0,1,0,1.066-1.062L8.574,10l3.2-3.168A.753.753,0,0,0,11.77,5.766Z"
        transform="translate(-1.875 -1.875)"
      />
      <path
        d="M10,1.875A8.125,8.125,0,1,0,18.125,10,8.124,8.124,0,0,0,10,1.875Zm4.859,12.984A6.872,6.872,0,1,1,5.141,5.141a6.872,6.872,0,1,1,9.719,9.719Z"
        transform="translate(-1.875 -1.875)"
      />
    </SVG>
  );
};

export const GoForward = ({ disabled }) => {
  return (
    <SVG
      disabled={disabled}
      width="16.25"
      height="16.25"
      viewBox="0 0 16.25 16.25"
    >
      <path
        d="M8.23,5.766a.757.757,0,0,1,1.066,0L13.023,9.5a.753.753,0,0,1,.023,1.039L9.375,14.227a.753.753,0,1,1-1.066-1.062L11.43,10,8.23,6.828A.745.745,0,0,1,8.23,5.766Z"
        transform="translate(-1.875 -1.875)"
      />
      <path
        d="M1.875,10A8.125,8.125,0,1,0,10,1.875,8.124,8.124,0,0,0,1.875,10Zm1.25,0A6.872,6.872,0,0,1,14.859,5.141a6.872,6.872,0,1,1-9.719,9.719A6.816,6.816,0,0,1,3.125,10Z"
        transform="translate(-1.875 -1.875)"
      />
    </SVG>
  );
};

GoBack.propTypes = {
  disabled: PropTypes.bool,
};

GoForward.propTypes = {
  disabled: PropTypes.bool,
};
