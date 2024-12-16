import styled from 'styled-components';
import backgroundImage from '../assets/BG.webp'; // Substitua pelo caminho correto da sua imagem
import backgroundImageMobile from '../assets/daymobile1.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 20px;
  flex-wrap: wrap;
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
  padding: 20px;
  justify-content: center; /* Mantém o alinhamento vertical */
  align-items: flex-start; /* Alinha os itens à esquerda */
  text-align: left; /* Alinha o texto à esquerda */
`;

const Heading = styled.h1`
  font-size: 64px;
  color: #1C244B;
  max-width: 600px;
  margin: 0; /* Remove centralização horizontal */
  
  span {
    color: #e6b845;
  }

  @media (max-width: 1024px) {
    font-size: 60px;
  }

  @media (max-width: 768px) {
    font-size: 45px;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

const Button = styled.a`
  background-color: #043647;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  width: 500px;
  height: 70px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background-color: #EBC76D;
    border: solid 1px #F69152;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 100%;
    height: 80px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    width: 250px;
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
          <span>Descubra</span> como alcançar seus objetivos de <span>saúde</span> e bem-estar com uma <span>consulta</span> online de nutrição <span>personalizada</span>.
        </Heading>
        <Button href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(welcomeMessage)}`}>Marcar consulta</Button>
      </TextSection>
    </Container>
  );
};

export default Home;
