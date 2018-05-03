import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body {
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`;