'use client';

import { Global, css } from '@emotion/react';

export const GlobalsStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Zalando Sans Expanded';
        font-weight: normal;
        src:
          local('Zalando Sans Expanded'),
          url('/fonts/ZalandoSansExpanded-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Zalando Sans Expanded';
        font-weight: bold;
        src:
          local('Zalando Sans Expanded'),
          url('/fonts/ZalandoSansExpanded-Black.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Miss Smarty Pants';
        font-weight: normal;
        src:
          local('Miss Smarty Pants'),
          url('/fonts/Miss-Smarty-Pants.ttf') format('truetype');
      }
      @font-face {
        font-family: 'Amatic SC';
        font-weight: normal;
        src:
          local('Amatic SC'),
          url('/fonts/AmaticSC-Regular.ttf') format('truetype');
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
        box-shadow: 0 0 0 50px #fff2 inset;
      }
      :-internal-autofill-selected {
        box-shadow: none;
        background-color: transparent !important;
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
      [disabled],
      [aria-disabled='true'] {
        cursor: not-allowed;
      }

      #root {
        min-height: 100vh;
      }
      ::selection {
        background: #d9ff00;
        color: #000;
        text-shadow: 2px 2px 3px #9cb60b;
      }

      @media (prefers-color-scheme: dark) {
        html {
          color-scheme: dark;
        }
      }
    `}
  />
);
