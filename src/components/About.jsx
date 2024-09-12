import styled from 'styled-components';
import SectImage from '../assets/image2.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 20px;
  flex-wrap: wrap;
  background-color: #f8ead9;
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 50px;
  min-width: 300px; /* Define uma largura mínima */
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
  width: 100%; /* Ajusta a largura do título */
`;

const Button = styled.button`
  background-color: #F29F05;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  

  cursor: pointer;
  &:hover {
    background-color: #d88804;
  }
  

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-left: 100px;
  }
  
`;

const ImageSection = styled.img`
  flex: 1;
  max-width: 25%;
  height: auto;
  min-width: 250px; /* Define um tamanho mínimo */
  margin-top: 20px;
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
      <ImageSection src={SectImage} alt="Imagem-section1" />
    </Container>
  );
};

export default Home;
