import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 45px;
  width: 50%;
  height: 50%;
`;

const Animation = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  color: #d05888;

  & > * {
    color: #d05888;
  }

  div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  div:nth-of-type(1) {
    animation-delay: -0.036s;
  }
  div:nth-of-type(1):after {
    top: 63px;
    left: 63px;
  }
  div:nth-of-type(2) {
    animation-delay: -0.072s;
  }
  div:nth-of-type(2):after {
    top: 68px;
    left: 56px;
  }
  div:nth-of-type(3) {
    animation-delay: -0.108s;
  }
  div:nth-of-type(3):after {
    top: 71px;
    left: 48px;
  }
  div:nth-of-type(4) {
    animation-delay: -0.144s;
  }
  div:nth-of-type(4):after {
    top: 72px;
    left: 40px;
  }
  div:nth-of-type(5) {
    animation-delay: -0.18s;
  }
  div:nth-of-type(5):after {
    top: 71px;
    left: 32px;
  }
  div:nth-of-type(6) {
    animation-delay: -0.216s;
  }
  div:nth-of-type(6):after {
    top: 68px;
    left: 24px;
  }
  div:nth-of-type(7) {
    animation-delay: -0.252s;
  }
  div:nth-of-type(7):after {
    top: 63px;
    left: 17px;
  }
  div:nth-of-type(8) {
    animation-delay: -0.288s;
  }
  div:nth-of-type(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading({ size }) {
  return (
    <Container>
      <Animation size={size}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Animation>
    </Container>
  );
}

Loading.propTypes = {
  size: PropTypes.string,
};

export default Loading;
