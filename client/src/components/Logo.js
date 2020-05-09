import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import LogoSmall from '../assets/logo-small.svg';

const wiggle = keyframes`
0%, 100%{
    transform: rotate(13deg);

}
50% {transform: rotate(0deg);}`;

const AnimatedLogo = styled.svg`
  width: 196px;
  height: 178px;
  & #Group_31 {
    animation: ${wiggle} 0.7s infinite;
    transform-origin: center;
    transform-box: fill-box;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  @media (min-width: 700px) {
    margin-top: 5%;
    height: 10%;
  }
  margin-top: 30px;
`;

function Logo({ size }) {
  return (
    <>
      {size === 'big' && (
        <Container>
          <AnimatedLogo
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 0 196.219 178.213"
          >
            <g id="phone" transform="translate(-10 39)">
              <g
                id="phone-2"
                data-name="phone"
                transform="translate(18.223 -4) rotate(11)"
              >
                <path
                  id="Subtraction_4"
                  data-name="Subtraction 4"
                  d="M625.356,633.086H483.588a14.2,14.2,0,0,1-11.632-6.493,13,13,0,0,0,4.051.648H617.953a13.888,13.888,0,0,0,10.592-5.126,18.97,18.97,0,0,0,4.387-12.374V545.7a20.117,20.117,0,0,0-.869-5.886,18.433,18.433,0,0,0-2.4-5.034,14.094,14.094,0,0,1,4.266,2.419A16.4,16.4,0,0,1,637.3,541a19.352,19.352,0,0,1,3.017,10.54v64.043a18.983,18.983,0,0,1-4.382,12.373A13.864,13.864,0,0,1,625.356,633.086Z"
                  transform="translate(-458.301 -523.554)"
                  fill="#3f3d56"
                  opacity="0.348"
                />
                <g
                  id="phone-3"
                  data-name="phone"
                  transform="translate(2.726 103.687) rotate(-90)"
                  style={{ isolation: 'isolate' }}
                >
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M100.14,40.853h-1.1V14.979C99.04,6.707,91.2,0,81.54,0H17.5C7.835,0,0,6.707,0,14.979V156.926c0,8.273,7.835,14.979,17.5,14.979H81.542c9.665,0,17.5-6.706,17.5-14.979V59.27h1.1Z"
                    fill="rgba(55,49,114,0.75)"
                    opacity="0.788"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M65.1,0h-7.03a4.542,4.542,0,0,1-.5,4.529,5.334,5.334,0,0,1-4.332,2.14H22.385a5.329,5.329,0,0,1-4.332-2.14A4.542,4.542,0,0,1,17.553,0H10.987C4.919,0,0,4.561,0,10.189V139.323c0,5.624,4.919,10.189,10.987,10.189H65.1c6.068,0,10.987-4.561,10.987-10.189V10.189C76.086,4.562,71.167,0,65.1,0Z"
                    transform="translate(11.88 11.665)"
                    fill="rgba(80,68,129,0.75)"
                    opacity="0.997"
                  />
                </g>
              </g>
            </g>
            <ellipse
              id="shadow"
              cx="42.028"
              cy="9.039"
              rx="42.028"
              ry="9.039"
              transform="translate(50 92.296) rotate(11)"
              fill="#cdd1ea"
            />
            <g id="tv" transform="translate(73.749 0) rotate(13)">
              <g
                id="Group_31"
                data-name="Group 31"
                transform="translate(5.342 0) rotate(3)"
              >
                <path
                  id="Union_22"
                  data-name="Union 22"
                  d="M-1846.919,61.925h-.04l0,0c-1.456-.047-21.89-.742-24.132-2.5-2.29-1.793-2.974-14.45-2.9-18.963-.072-4.512.612-17.17,2.9-18.963,2.242-1.755,22.676-2.45,24.132-2.5l0,0h.08l0,0c1.456.047,21.891.742,24.133,2.5,2.29,1.793,2.974,14.451,2.9,18.963.072,4.513-.613,17.171-2.9,18.963-2.242,1.755-22.676,2.45-24.133,2.5l0,0Z"
                  transform="matrix(0.995, -0.105, 0.105, 0.995, 1873.472, -169.963)"
                  fill="#e7eaff"
                />
                <path
                  id="Union_21"
                  data-name="Union 21"
                  d="M19.512,29.989h-.029v0c-1.049-.033-15.771-.519-17.386-1.745C.445,26.991-.048,18.148,0,14.995-.048,11.842.445,3,2.095,1.746,3.71.52,18.432.035,19.481,0V0h.057V0C20.591.035,35.313.52,36.928,1.746c1.65,1.253,2.143,10.1,2.091,13.248.052,3.153-.441,12-2.091,13.248-1.615,1.226-16.337,1.712-17.387,1.745v0Z"
                  transform="matrix(0.996, -0.087, 0.087, 0.996, 19.954, 50.781)"
                  fill="#1e194f"
                />
                <g
                  id="Group_5"
                  data-name="Group 5"
                  transform="matrix(0.996, -0.087, 0.087, 0.996, 11.936, 90.798)"
                >
                  <path
                    id="Path_68"
                    data-name="Path 68"
                    d="M1.294,0S.131,7.586.011,9.23s.73,2.96,2.157,1.361S8.32.976,8.32.976Z"
                    transform="translate(0 0)"
                    fill="#282241"
                  />
                  <path
                    id="Path_69"
                    data-name="Path 69"
                    d="M7.026,0S8.189,7.586,8.309,9.23s-.73,2.96-2.157,1.361S0,.976,0,.976Z"
                    transform="translate(53.494 0)"
                    fill="#282241"
                  />
                </g>
                <path
                  id="Union_17"
                  data-name="Union 17"
                  d="M40.1,8.028a52.541,52.541,0,0,1-7.7.205,52.54,52.54,0,0,1-7.7-.205C15.287,7.19,5.384,16.056,5.384,16.056s-10.094-1.6-2.64-8.9C9.524.525,28.726.037,32.14,0V0h.521V0c3.414.034,22.616.523,29.4,7.157,7.454,7.293-2.64,8.9-2.64,8.9S49.518,7.19,40.1,8.028Z"
                  transform="matrix(0.996, -0.087, 0.087, 0.996, 5.483, 33.192)"
                  fill="#181524"
                />
                <path
                  id="Subtraction_3"
                  data-name="Subtraction 3"
                  d="M35.254,55.079h-.1l0,0h0c-.8-.026-8.064-.269-15.3-.781-4.163-.294-7.6-.625-10.2-.982-3.225-.442-5.2-.927-5.865-1.442-1.624-1.255-2.548-6.6-3.038-10.857A117.223,117.223,0,0,1,.007,27.539,117.218,117.218,0,0,1,.742,14.065c.49-4.26,1.414-9.6,3.038-10.858.667-.515,2.64-1,5.865-1.442,2.607-.357,6.039-.687,10.2-.982C27.125.269,34.348.029,35.148,0l0,0L35.2,0l.052,0,0,0h0c.8.026,8.064.269,15.3.781,4.163.294,7.6.625,10.2.982,3.225.442,5.2.927,5.865,1.442,1.624,1.255,2.548,6.6,3.038,10.858A117.159,117.159,0,0,1,70.4,27.539a117.173,117.173,0,0,1-.735,13.475c-.49,4.26-1.414,9.6-3.038,10.857-.667.515-2.64,1-5.865,1.442-2.607.357-6.04.687-10.2.982-7.279.515-14.5.755-15.3.781l0,0h0ZM35.2,48.743h.039l0,0c.24-.008,5.942-.194,11.63-.6,7.178-.514,11.287-1.142,12.212-1.866,1.234-.966,1.937-5.079,2.309-8.36a91.342,91.342,0,0,0,.559-10.375,91.337,91.337,0,0,0-.559-10.375c-.372-3.281-1.075-7.394-2.309-8.36-.925-.724-5.034-1.352-12.212-1.866-5.53-.4-11.022-.581-11.63-.6,0,0-.01,0-.014,0h-.067l0,0c-.24.008-5.94.193-11.63.6C16.353,7.452,12.244,8.08,11.319,8.8c-1.234.966-1.937,5.08-2.309,8.36a91.317,91.317,0,0,0-.559,10.375A91.321,91.321,0,0,0,9.01,37.915c.372,3.28,1.075,7.394,2.309,8.36.925.724,5.034,1.352,12.212,1.866,5.53.4,11.022.581,11.63.6,0,0,.01,0,.014,0H35.2Z"
                  transform="matrix(0.996, -0.087, 0.087, 0.996, 3.215, 39.564)"
                  fill="#282241"
                />
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="matrix(0.996, -0.087, 0.087, 0.996, 0, 2.822)"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="19.004"
                    y2="29.562"
                    transform="translate(2.464 2.464)"
                    fill="none"
                    stroke="#4f4b62"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x1="7.039"
                    y2="19.708"
                    transform="translate(22.876 12.318)"
                    fill="none"
                    stroke="#4f4b62"
                    strokeWidth="2"
                  />
                  <circle
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    cx="2.112"
                    cy="2.112"
                    r="2.112"
                    fill="#352f4b"
                  />
                  <circle
                    id="Ellipse_2"
                    data-name="Ellipse 2"
                    cx="2.112"
                    cy="2.112"
                    r="2.112"
                    transform="translate(28.154 9.879)"
                    fill="#352f4b"
                  />
                  <path
                    id="Intersection_1"
                    data-name="Intersection 1"
                    d="M.095,8.959A7.743,7.743,0,1,1,15.476,7.37,18.879,18.879,0,0,1,5.983,9.854,19.534,19.534,0,0,1,.095,8.959Z"
                    transform="translate(14.781 26.043)"
                    fill="#4f4b62"
                    opacity="0.999"
                  />
                </g>
                <g
                  id="Ellipse_10"
                  data-name="Ellipse 10"
                  transform="matrix(0.996, -0.087, 0.087, 0.996, 30.623, 56.045)"
                  fill="none"
                  stroke="#fafbff"
                  strokeWidth="3"
                >
                  <circle cx="9.243" cy="9.243" r="9.243" stroke="none" />
                  <circle cx="9.243" cy="9.243" r="7.743" fill="none" />
                </g>
                <path
                  id="Polygon_4"
                  data-name="Polygon 4"
                  d="M3.315,0,6.631,5.223H0Z"
                  transform="matrix(0.087, 0.996, -0.996, 0.087, 43.464, 60.681)"
                  fill="#d02929"
                />
              </g>
            </g>
          </AnimatedLogo>
        </Container>
      )}
      {size === 'small' && <img src={LogoSmall} alt="small-logo" />}
    </>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
