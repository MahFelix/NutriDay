import { createGlobalStyle } from 'styled-components';
import BGBG from './src/assets/BGBG.jpg'; // Caminho para sua imagem de background

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-image: url(${BGBG});  /* Adicionando o background */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

  /* Garantir que as divs ocupem 100% da altura disponível */
  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
