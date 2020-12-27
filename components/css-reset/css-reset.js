import { createGlobalStyle } from 'styled-components';

const CssReset = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
    font-family: 'Public Sans', sans-serif;
  }

  p {
    margin-bottom: 20px;
  }

  li {
    margin-left: 24px;
    margin-bottom: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default CssReset;
