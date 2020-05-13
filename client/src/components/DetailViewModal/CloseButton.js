import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CloseIcon from '../../assets/icons/CloseIcon';

const Button = styled.button`
  right: 0px;
  top: 0px;
  position: absolute;
  background: transparent;
  border: none;
  margin: -14px -20px -25px 0px;
  padding-top: -20px;
  z-index: 10;
  cursor: pointer;
`;

function CloseButton({ onClick, size }) {
  return (
    <Button onClick={onClick}>
      <CloseIcon size={size} />
    </Button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default CloseButton;
