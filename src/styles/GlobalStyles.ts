import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    background: #F0F0F5;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: 500px;
    background-position: -250px -100px;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e74743;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;
