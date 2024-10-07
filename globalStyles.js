// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import BGBG from './src/assets/BGBG.webp'; // Certifique-se de que o caminho está correto

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-image: url(${BGBG});
    background-size: cover;
    background-attachment: fixed; /* Mantém o background fixo */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat; /* Evita repetição da imagem */
    min-height: 100vh; /* Garante que o background cubra toda a altura da tela */
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;
