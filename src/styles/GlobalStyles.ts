import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: 500px;
    background-position: -250px -100px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    height: 100%;
  }
`;
