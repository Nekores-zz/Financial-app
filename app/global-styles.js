import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    background: #E5E5E5
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  .draggable-item {
    border: 1px solid black
    margin:5px
  }

  body.fontLoaded {
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background: #E5E5E5;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
