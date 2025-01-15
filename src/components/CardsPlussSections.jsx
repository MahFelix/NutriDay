import styled from "styled-components";
import MobileBackgroundImage from "../assets/Dayback3.webp"; // Imagem para mobile
import DesktopBackgroundImage from "../assets/DayDesk.png"; // Nova imagem para desktop

// Container principal
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d8dee9;
  padding: 20px;
`;

// Seção de background azul com imagem
export const BackgroundSection = styled.div`
  width: 100%;
  height: 300px; /* Altura padrão para mobile */
  background-color: #b8babd;
  border-radius: 10px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${MobileBackgroundImage});
  padding: 150px;

  @media (min-width: 768px) {
    height: 600px; /* Reduz a altura para desktop */
    background-image: url(${DesktopBackgroundImage});
  }

  @media (min-width: 1200px) {
    height: 400px; /* Ajuste ainda mais para telas muito grandes */
  }
`;

// Bolhas de informação
export const InfoBubble = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
`;

export const BubbleIcon = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;

export const BubbleText = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

// Seção dos Cards
export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #043647;
  width: 90%;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%; /* Cards maiores no desktop */
  }
`;

export const CardIcon = styled.span`
  font-size: 30px;
  color: #ffc107;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  text-align: center;
  color: #fafafa;
  font-size: 16px;
  margin: 0;
`;

function App() {
  return (
    <PageContainer>
      {/* Primeira seção com imagem no background */}
      <BackgroundSection>
        <InfoBubble top="10px" left="10px">
          <BubbleIcon>⚙️</BubbleIcon>
          <BubbleText>Ajustes contínuos</BubbleText>
        </InfoBubble>
        <InfoBubble bottom="10px" right="10px">
          <BubbleIcon>⚡</BubbleIcon>
          <BubbleText>+ energia pro dia a dia</BubbleText>
        </InfoBubble>
      </BackgroundSection>

      {/* Segunda seção com cards */}
      <CardSection>
        <Card>
          <CardIcon>🍽️</CardIcon>
          <CardTitle>Cardápio personalizado de acordo com seus gostos</CardTitle>
        </Card>
        <Card>
          <CardIcon>✨</CardIcon>
          <CardTitle>Adequação às suas necessidades nutricionais</CardTitle>
        </Card>
        <Card>
          <CardIcon>📅</CardIcon>
          <CardTitle>Flexibilidade para ocasiões especiais</CardTitle>
        </Card>
      </CardSection>
    </PageContainer>
  );
}

export default App;
