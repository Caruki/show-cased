import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '../assets/close-icon.svg';

const Button = styled.button`
  width: fit-content;
  height: fit-content;
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

function CloseButton() {
  return (
    <Button>
      <img src={CloseIcon} alt="small icon with an x symbol" />
    </Button>
  );
}

export default CloseButton;
