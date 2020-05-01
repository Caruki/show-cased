import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const SVG = styled.svg`
  height: ${(props) => (props.size === 'big' ? '39px' : '25px')};
  .offset0 {
    stop-color: ${(props) => (props.active ? '#e7eaff' : '#e7eaff')};
  }
  .offset1 {
    stop-color: ${(props) => (props.active ? '#d05888' : '#aeb2f5')};
  }
`;

export const WatchedButton = ({ active, size, id }) => {
  return (
    <SVG active={active} size={size} viewBox="0 0 39 39">
      <defs>
        <linearGradient
          id={`watched${id}`}
          x1="0.196"
          y1="0.18"
          x2="0.882"
          y2="0.849"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e7eaff" />
          <stop className="offset1" offset="1" />
        </linearGradient>
        <filter
          id="Path_14"
          x="0"
          y="0"
          width="39"
          height="39"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feFlood floodColor="#d05888" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_14)">
        <path
          id="Path_14-2"
          data-name="Path 14"
          d="M15,0A15,15,0,1,0,30,15,15,15,0,0,0,15,0Zm0,29.18A14.18,14.18,0,1,1,29.18,15,14.18,14.18,0,0,1,15,29.18Zm9.041-5.918a.41.41,0,0,1,.006.58c-.253.258-.519.509-.791.743a.41.41,0,1,1-.536-.621c.255-.22.5-.454.74-.7a.41.41,0,0,1,.58-.007ZM27.656,15a12.639,12.639,0,0,1-1.646,6.238.41.41,0,0,1-.713-.406,11.833,11.833,0,1,0-5.25,4.873.41.41,0,0,1,.352.741,12.52,12.52,0,0,1-5.4,1.21A12.656,12.656,0,1,1,27.656,15ZM9.373,12.948,8.006,14.316l5.478,5.478,8.51-8.51-1.078-1.078-7.142,7.144a.422.422,0,0,1-.58,0L10.725,14.88a.41.41,0,1,1,.58-.58l2.18,2.18,7.142-7.144a.41.41,0,0,1,.58,0l1.657,1.657a.41.41,0,0,1,0,.58l-9.09,9.09a.41.41,0,0,1-.58,0L7.136,14.606a.41.41,0,0,1,0-.58l1.657-1.657a.41.41,0,0,1,.58.58Z"
          transform="translate(4.5 4.5)"
          fill={`url(#watched${id})`}
        />
      </g>
    </SVG>
  );
};

export const ToWatchButton = ({ active, size, id }) => {
  return (
    <SVG active={active} size={size} viewBox="0 0 39 39.001">
      <defs>
        <linearGradient
          id={`towatch${id}`}
          x1="0.203"
          y1="0.15"
          x2="0.921"
          y2="0.888"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e7eaff" />
          <stop className="offset1" offset="1" />
        </linearGradient>
        <filter
          id="star"
          x="0"
          y="0"
          width="39"
          height="39.001"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feFlood floodColor="#d05888" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#star)">
        <path
          id="star-2"
          data-name="star"
          d="M6.3,13.351l.533.692a.41.41,0,1,1-.649.5l-.533-.692a.41.41,0,1,1,.649-.5ZM25.97,11.062A.41.41,0,0,0,25.7,10.8L19.086,8.846l-3.9-5.684a.409.409,0,0,0-.676,0l-3.9,5.684-6.61,1.948a.41.41,0,0,0-.209.643l.576.749a.41.41,0,1,0,.649-.5l-.212-.276,6.177-1.82a.409.409,0,0,0,.222-.162l3.64-5.312,3.64,5.312a.409.409,0,0,0,.222.162l6.176,1.821-3.927,5.1a.408.408,0,0,0-.085.261l.177,6.437-6.067-2.157a.412.412,0,0,0-.274,0L8.648,23.214l.177-6.437a.407.407,0,0,0-.085-.261l-.623-.81a.41.41,0,0,0-.649.5L8,16.9l-.189,6.889a.41.41,0,0,0,.547.4l6.493-2.31,6.493,2.309a.41.41,0,0,0,.547-.4L21.7,16.9l4.2-5.461A.409.409,0,0,0,25.97,11.062Zm-4.341,1.766-2.492,3.239.112,4.086a.41.41,0,0,1-.547.4l-3.85-1.37L11,20.55a.41.41,0,0,1-.547-.4l.112-4.085L8.076,12.827a.41.41,0,0,1,.209-.643l3.92-1.156,2.31-3.371a.425.425,0,0,1,.676,0l2.31,3.371,3.92,1.156a.41.41,0,0,1,.209.643ZM20.615,12.8l-3.486-1.028a.411.411,0,0,1-.222-.162l-2.055-3-2.055,3a.411.411,0,0,1-.222.162L9.089,12.8l2.216,2.879a.408.408,0,0,1,.085.261l-.1,3.633,3.425-1.217a.41.41,0,0,1,.274,0l3.425,1.217-.1-3.632a.408.408,0,0,1,.085-.261Zm4.737-8.464a.41.41,0,0,0-.574.585,14.128,14.128,0,1,1-2.8-2.142.41.41,0,1,0,.413-.709,15,15,0,1,0,2.964,2.265Z"
          transform="translate(4.67 4.47)"
          fill={`url(#towatch${id})`}
        />
      </g>
    </SVG>
  );
};

WatchedButton.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  id: PropTypes.number,
};

ToWatchButton.propTypes = {
  active: PropTypes.bool,
  size: PropTypes.string,
  id: PropTypes.number,
};
