import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 20px;
  background-color: #f8ead9;
`;

const TextSection = styled.div`
  flex: 1;
  padding-right: 50px;
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #333;
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
