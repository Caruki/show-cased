import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  .offset0 {
    stop-color: ${(props) => (props.active ? '#f79dc1' : '#e7eaff')};
    stop-opacity: ${(props) => (props.active ? '0.8' : '1')};
  }
  transform: ${(props) =>
    props.active ? 'translateX(10px)' : 'transform: translateX(0px);'};
`;

export const SearchIcon = ({ active, onClick }) => {
  return (
    <SVG
      active={active}
      onClick={onClick}
      width="23"
      height="23.141"
      viewBox="0 0 23 23.141"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop className="offset0" offset="0" />
          <stop offset="1" stopColor="#aeb2f5" />
        </linearGradient>
      </defs>
      <path
        id="search"
        d="M27.42,9.811a.341.341,0,0,1,.44.2c.084.225.159.456.223.688a.341.341,0,1,1-.658.181c-.059-.212-.127-.424-.2-.63a.341.341,0,0,1,.2-.439Zm.953,3.046A8.108,8.108,0,0,1,15.382,19.33l-2.566,2.5.151.151a.341.341,0,0,1,0,.485L10.6,24.785a.342.342,0,1,1-.479-.488l2.115-2.079L11.1,21.08,6.195,25.9l1.116,1.157,1.669-1.64a.342.342,0,0,1,.479.488L7.545,27.791a.341.341,0,0,1-.239.1h0a.342.342,0,0,1-.241-.1l-1.59-1.649a.341.341,0,0,1,.006-.481l5.391-5.3a.341.341,0,0,1,.481,0l.117.117L14,18.005A8.11,8.11,0,1,1,27.246,8.726a.341.341,0,0,1-.588.348A7.427,7.427,0,1,0,14.722,17.8a7.671,7.671,0,0,0,.851.814A7.426,7.426,0,0,0,27.69,12.857a7.538,7.538,0,0,0-.041-.787A.341.341,0,1,1,28.328,12a8.231,8.231,0,0,1,.046.858Zm-16.04,8.488,2.519-2.451q-.2-.182-.4-.379l-2.51,2.443Zm2.09-11.573a.341.341,0,0,0-.454.166,6.937,6.937,0,0,0,1.115,7.536,7.161,7.161,0,0,0,.8.762A6.866,6.866,0,0,0,20.264,19.8,6.938,6.938,0,1,0,15.1,8.23a.341.341,0,1,0,.508.456,6.254,6.254,0,1,1,4.658,10.426,6.19,6.19,0,0,1-3.952-1.406,6.492,6.492,0,0,1-.719-.688,6.255,6.255,0,0,1-1.005-6.792.341.341,0,0,0-.165-.454Z"
        transform="translate(-5.374 -4.747)"
        fill="url(#linear-gradient)"
      />
    </SVG>
  );
};

SearchIcon.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
