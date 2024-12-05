import styled from 'styled-components';
import profileImage from '../assets/DBG.webp'; // Substitua pelo caminho da sua imagem

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #F7F9F6;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    background-color: #F7F9F6;
  }
`;

const TextSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #1C244B;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #1C244B;
  line-height: 1.6;
  width: 80%;

  @media (max-width: 768px) {
    font-size: 18px;
    width: 90%;
  }
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const AboutMe = () => {
  return (
    <Container id="sobre">
      <TextSection>
        <Image src={profileImage} alt="Dayane Souza" />
        <Heading>SOBRE MIM</Heading>
        <Paragraph>
          Sou Dayane Souza, nutricionista apaixonada por promover uma alimentação equilibrada e um estilo de vida saudável. Minha missão é ajudar você a alcançar seus objetivos com um plano alimentar individualizado e prático.
        </Paragraph>
        <Paragraph>
          Formada pela Estácio, com diversas especializações, acredito que cada pessoa merece uma abordagem única, respeitando sua rotina e preferências. Vamos juntos transformar sua saúde e bem-estar!
        </Paragraph>
        <Paragraph>
          Agende uma consulta e inicie sua jornada para uma vida mais saudável!
        </Paragraph>
      </TextSection>
    </Container>
  );
};

export default AboutMe;
