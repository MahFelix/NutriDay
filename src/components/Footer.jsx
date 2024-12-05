
import styled from 'styled-components';

// Estilos para o container principal do Footer
const FooterContainer = styled.footer`
  background-color: #00A091; /* Cor de fundo do footer */
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Estilos para o texto do Footer
const FooterText = styled.p`
  color: #F8EAD9; /* Cor do texto */
  font-size: 16px;
  text-align: center;
`;

// Componente Footer
const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Todos os direitos reservados &copy; {new Date().getFullYear()}</FooterText>
    </FooterContainer>
  );
};

export default Footer;
