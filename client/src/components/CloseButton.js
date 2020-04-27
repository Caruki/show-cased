import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import CloseIcon from '../assets/close-icon.svg';

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

  &:focus {
    outline-width: 0;
  }
`;

function CloseButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <img src={CloseIcon} alt="small icon with an x symbol" />
    </Button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
};

export default CloseButton;
