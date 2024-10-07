import styled from 'styled-components';
import backgroundImage from '../assets/BG.jpg'; // Substitua pelo caminho correto da sua imagem
import backgroundImageMobile from '../assets/BGBG2.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 20px;
  flex-wrap: wrap;
  background-color: #F8EAD9;
  background-image: url(${backgroundImage});
  background-size: cover; /* A imagem cobre todo o container */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição da imagem */

  @media (max-width: 768px) {
    background-image: url(${backgroundImageMobile}); /* Imagem de fundo para mobile */
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px; /* Reduzido para melhorar a responsividade */
  justify-content: center;
  align-items: center;
  text-align: center; /* Centraliza o texto em telas menores */
`;

const Heading = styled.h1`
  font-size: 64px;
  color: #1C244B;
  max-width: 600px; /* Define uma largura máxima para o título */
  margin: 0 auto; /* Centraliza horizontalmente */

  @media (max-width: 1024px) {
    font-size: 60px; /* Ajuste para telas médias */
  }

  @media (max-width: 768px) {
    font-size: 45px; /* Ajuste para tablets */
    width: 90%; /* Aumenta a largura para ocupar mais espaço em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 35px; /* Ajuste para telas de celulares */
  }
`;

const Button = styled.a`
  background-color: #3BC550;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  width: 200px;
  height: 70px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none; /* Remove underline */
  display: inline-flex; /* Para centralizar texto */
  justify-content: center; /* Centraliza o texto horizontalmente */
  align-items: center; /* Centraliza o texto verticalmente */
  margin-top: 20px; /* Adicionado para espaçamento entre o título e o botão */

  &:hover {
    background-color: #d88804;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%; /* Ajusta a largura do botão para ocupar 100% do contêiner */
    height: 80px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    width: 130px;
    height: 50px;
  }
`;

const Home = () => {
  const whatsappNumber = '5579996848609'; // Substitua pelo número de telefone da nutricionista
  const welcomeMessage = 'Olá! Seja bem-vindo(a) Sou *Dayane Souza - Nutricionista*. Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar de forma personalizada. Sinta-se à vontade para me enviar suas dúvidas ou agendar uma consulta.';
  return (
    <Container>
      <TextSection>
        <Heading>
          Descubra como alcançar seus objetivos de saúde e bem-estar com uma consulta online de nutrição personalizada.
        </Heading>
        <Button href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(welcomeMessage)}`}>Marcar consulta</Button>
      </TextSection>
    </Container>
  );
};

export default Home;
