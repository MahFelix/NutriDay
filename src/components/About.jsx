import styled from 'styled-components';
import backgroundImage from '../assets/BG.jpg'; // Substitua pelo caminho correto da sua imagem
import backgroundImageMobile from '../assets/BG-m.jpg'

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
  padding-right: 50px;
  min-width: 300px; /* Define uma largura mínima */
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 75px;
  color: #1C244B;
  width: 40%; /* Ajusta a largura do título */

  @media (max-width: 1024px) {
    font-size: 60px; /* Ajuste para telas médias */
  }

  @media (max-width: 768px) {
    font-size: 45px; /* Ajuste para tablets */
    width: 100%; /* Para garantir que o texto ocupe a largura total em telas menores */
    text-align: center; /* Centraliza o texto em telas menores */
  }

  @media (max-width: 480px) {
    font-size: 30px; /* Ajuste para telas de celulares */
  }
`;

const Button = styled.button`
  background-color: #3BC550;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  width: 200px;
  height: 70px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #d88804;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    width: 200px;
    height: 80px;
    margin-top: 30px;

  }

  @media (max-width: 480px) {
    font-size: 14px;
    width: 130px;
    height: 50px;
  }
`;

const Home = () => {
  return (
    <Container>
      <TextSection>
        <Heading>
          Descubra como alcançar seus objetivos de saúde e bem-estar com uma consulta online de nutrição personalizada.
        </Heading>
        <Button>Marcar consulta</Button>
      </TextSection>
    </Container>
  );
};

export default Home;
