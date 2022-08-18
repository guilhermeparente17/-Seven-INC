import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: #f5f5f5;
  }
`;
 
export default GlobalStyle;