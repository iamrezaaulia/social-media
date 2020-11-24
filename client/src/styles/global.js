import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Montserrat', 'Muli', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgba(245, 246, 248, 0.75);
    color: #121212;
    font-size: 16px;
  }
`;
