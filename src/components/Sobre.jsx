import styled from 'styled-components';
import profileImage from '../assets/DBG.png'; // Substitua pelo caminho da sua imagem


const Container = styled.div`
  display: flex;
  flex-direction: row; /* Para telas grandes, os itens ficam lado a lado */
  align-items: center;
  padding: 40px;
justify-content: center;


  @media (max-width: 768px) {
    flex-direction: column; /* Para telas menores, os itens ficam empilhados */
    align-items: center;
    padding: 20px; /* Ajusta o padding em telas menores */
  }
`;

const TextSection = styled.div`
  flex: 1;
  margin-right: 40px; /* Espaço à direita da imagem para telas grandes */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0; /* Remove a margem para telas menores */
    margin-bottom: 20px; /* Adiciona espaço abaixo do texto */
  }
`;

const Heading = styled.h1`
  font-size: 36px;
  color: #1C244B;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 28px; /* Tamanho do título em telas menores */
  }
`;

const Paragraph = styled.p`
  font-size: 22px;
  color: #1C244B;
  line-height: 1.6; /* Melhora a legibilidade */
  align-items: center;
  width: 60%;

  @media (max-width: 1024px) {
    width: 80%;
    font-size: 20px; /* Ajusta o tamanho da fonte para telas médias */
  }

  @media (max-width: 768px) {
    width: 90%;
    font-size: 18px; /* Ajusta o tamanho da fonte para telas menores */
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 16px; /* Ajusta o tamanho da fonte para telas muito pequenas */
  }
`;

const Image = styled.img`
  width: 600px; /* Tamanho da imagem */
  height: auto; /* Manter a proporção */
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    width: 80%; /* Ajusta a imagem para telas médias */
  }

  @media (max-width: 768px) {
    width: 100%; /* Imagem ocupa toda a largura em telas menores */
    max-width: 400px; /* Limita a largura máxima da imagem */
  }
`;

const AboutMe = () => {
  return (
    <Container id='sobre'>
      <TextSection>
        <Image src={profileImage} alt="Dayane Souza" />
        <Heading>SOBRE MIM </Heading>
        <Paragraph>
          Olá, eu sou Dayane Souza, apaixonada por promover uma alimentação equilibrada e um estilo de vida saudável. Minha missão é ajudar você a atingir seus objetivos, seja melhorar sua saúde, alcançar o peso ideal, ou aprender a fazer escolhas alimentares mais conscientes e nutritivas.
        </Paragraph>
        <Paragraph>
          Com uma formação em Nutrição pela Estácio, e diversas especializações, eu trago uma abordagem individualizada, respeitando suas necessidades, gostos e rotina. Acredito que cada pessoa é única e merece um plano alimentar que se encaixe no seu estilo de vida.
        </Paragraph>
        <Paragraph>
          Além do acompanhamento nutricional, gosto de educar meus pacientes para que possam desenvolver uma relação saudável com a comida, entendendo que uma boa nutrição é um investimento a longo prazo na sua qualidade de vida. Vamos juntos criar hábitos que vão transformar sua saúde e bem-estar!
        </Paragraph>
        <Paragraph>
          Sinta-se à vontade para explorar o site e agendar uma consulta. Estou aqui para te guiar nessa jornada rumo a uma vida mais saudável e equilibrada!
        </Paragraph>
      </TextSection>
    </Container>
  );
};

export default AboutMe;
