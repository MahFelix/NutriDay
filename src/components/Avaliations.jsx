import styled from "styled-components";

// Container principal da avaliação
const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00303c;
  border-radius: 15px;
  padding: 10px 20px;
  width: fit-content;
  margin: 0 auto; /* Centraliza horizontalmente */
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

// Estilo dos círculos para as imagens
const AvatarGroup = styled.div`
  display: flex;
  position: relative;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-left: -10px;
    object-fit: cover;
    background-color: #ccc;

    &:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;

    img {
      width: 40px;
      height: 40px;
    }
  }
`;

// Bolha com texto "+200"
const PlusBubble = styled.div`
  background-color: #f4c045;
  color: #00303c;
  font-weight: bold;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

// Seção de estrelas
const StarSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  span {
    color: #f4c045;
    font-size: 24px;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    margin-left: 0;

    span {
      font-size: 20px;
    }
  }
`;

function ReviewCard() {
  return (
    <ReviewContainer>
      {/* Grupo de avatares */}
      <AvatarGroup>
        <img src="/assets/avatar1.jpg" alt="Avatar 1" />
        <img src="/assets/avatar2.jpg" alt="Avatar 2" />
        <img src="/assets/avatar3.jpg" alt="Avatar 3" />
        <img src="/assets/avatar4.jpg" alt="Avatar 4" />
      </AvatarGroup>

      {/* Bolha +200 */}
      <PlusBubble>+100</PlusBubble>

      {/* Seção de estrelas */}
      <StarSection>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
      </StarSection>
    </ReviewContainer>
  );
}

export default ReviewCard;
