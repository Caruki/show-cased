import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300&display=swap');
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          font-family: 'Roboto', sans-serif;
          font-size: 17px;
          margin: 0px;
          background-color: #0e052e;
        }
      `}
    />
  );
}

export default GlobalStyle;
