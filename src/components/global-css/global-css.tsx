'use client';

import { Global, css } from '@emotion/react';

export const GlobalsStyle = () => (
  <Global
    styles={css`
      /* latin-ext */
      @font-face {
        font-family: 'Zalando Sans Expanded';
        font-style: normal;
        font-weight: 200 900;
        src:
          local('Zalando Sans Expanded'),
          url(https://fonts.gstatic.com/s/zalandosansexpanded/v2/JTUJjJci8Cy470GaeFwsix1hi3aTmrgRwU-zokw7cX4.woff2)
            format('woff2');
        unicode-range:
          U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF,
          U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Zalando Sans Expanded';
        font-style: normal;
        font-weight: 200 900;
        src:
          local('Zalando Sans Expanded'),
          url(https://fonts.gstatic.com/s/zalandosansexpanded/v2/JTUJjJci8Cy470GaeFwsix1hi3aTmrgRwU-zrEw7.woff2)
            format('woff2');
        unicode-range:
          U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F,
          U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      * {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      ::-webkit-input-placeholder,
      ::-moz-placeholder,
      :-ms-input-placeholder {
        color: inherit;
      }
      ::-moz-placeholder {
        opacity: 1;
      }
      :-webkit-autofill,
      :-webkit-autofill:focus {
        box-shadow: 0 0 0 50px white inset;
      }
      html {
        font-size: 10px;
      }
      body {
        min-height: 100vh;
        overflow-y: scroll;
        overflow-x: hidden;
        color: #ffffff;
        fill: #ffffff;
        background: #01021b;
        font-family: 'Zalando Sans Expanded', sans-serif;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      th {
        font-size: inherit;
        font-weight: inherit;
      }
      cite,
      var,
      address,
      dfn {
        font-style: inherit;
      }
      body,
      pre,
      form,
      input,
      textarea,
      keygen,
      select,
      button,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      hr,
      blockquote,
      ol,
      ul,
      dl,
      dd,
      figure,
      fieldset {
        margin: 0;
      }
      ol,
      fieldset,
      legend,
      input,
      button,
      textarea {
        padding: 0;
        font-family: inherit;
      }
      ul {
        padding-left: 0;
      }
      ol,
      ul,
      li {
        list-style-type: none;
      }
      a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
      }
      textarea {
        resize: none;
        overflow-y: auto;
      }
      iframe {
        border-style: none;
      }
      fieldset,
      hr,
      button,
      keygen,
      img {
        border-style: none;
        outline-style: none;
        font-family: inherit;
        font-size: inherit;
      }
      [type='button'],
      [type='reset'],
      [type='submit'],
      [type='file'],
      [type='image'],
      button {
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      [disabled] {
        cursor: not-allowed;
      }

      #root {
        min-height: 100vh;
      }
      ::selection {
        background: #f99;
        color: #fff;
        text-shadow: 2px 2px 3px #f55;
      }

      @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }
      }
    `}
  />
);
