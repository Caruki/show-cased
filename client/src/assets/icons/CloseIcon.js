import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  width: ${(props) => (props.size === 'big' ? '40px' : '30px')};
  height: ${(props) => (props.size === 'big' ? '40px' : '30px')};
`;

const CloseIcon = ({ size }) => {
  return (
    <SVG size={size} viewBox="-4 1 30 30">
      <defs>
        <filter id="circle" x="-5" y="-5" filterUnits="userSpaceOnUse">
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodColor="#e7eaff" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#circle)">
        <path
          transform="translate(5 3)"
          data-name="circle"
          d="M8.749,1.875A7,7,0,0,0,1.875,8.992a7,7,0,0,0,6.874,7.117,7,7,0,0,0,6.874-7.117A7,7,0,0,0,8.749,1.875Zm1.742,9.694-1.742-1.8-1.742,1.8a.518.518,0,0,1-.747,0,.559.559,0,0,1,0-.773L8,8.992l-1.742-1.8a.559.559,0,0,1,0-.773.518.518,0,0,1,.747,0l1.742,1.8,1.742-1.8a.518.518,0,0,1,.747,0,.563.563,0,0,1,0,.773L9.5,8.992l1.742,1.8a.563.563,0,0,1,0,.773A.512.512,0,0,1,10.491,11.569Z"
          fill="#1e194f"
        />
      </g>
    </SVG>
  );
};

CloseIcon.propTypes = {
  size: PropTypes.string,
};

export default CloseIcon;
