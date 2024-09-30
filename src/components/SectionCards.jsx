import styled from 'styled-components';
import BGBG from '../assets/BGBG.jpg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adaptável para o tamanho da tela */
  gap: 20px;
  padding: 40px;
  background-color: #F8EAD9;
  background-image: url(${BGBG});
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Card = styled.div`
  background-color: #5ECC97;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%; /* Todos os cards terão a mesma altura */

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Icon = styled.div`
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 24px;
  color: #1C244B;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  background-color: #3BC550;
  display: flex;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  color: white;
  width: 200px;
  height: 70px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #32a74d;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: 20px;
  }
`;


import {  FaHeartbeat, FaAppleAlt, FaWeight, FaUtensils, FaCapsules, FaClinicMedical } from 'react-icons/fa'; // Importando ícones

const SectionCards = () => {
  const cardsData = [
    {
      icon: <FaHeartbeat size={40} color="#fff" />,
      title: "Avaliação corporal",
      description: "Avaliação corporal completa para entender suas necessidades e traçar o caminho ideal rumo aos seus objetivos de saúde.",
    },
    {
      icon: <FaAppleAlt size={40} color="#fff" />,
      title: "Boa prática",
      description: "Adote boas práticas alimentares para uma vida mais saudável, equilibrada e cheia de vitalidade.",
    },
    {
      icon: <FaClinicMedical size={40} color="#fff" />,
      title: "Nutrição clínica",
      description: "Nutrição clínica focada em promover saúde e bem-estar, com planos alimentares personalizados para cada condição e necessidade.",
    },
    {
      icon: <FaUtensils size={40} color="#fff" />,
      title: "Plano alimentar personalizado",
      description: "Plano alimentar personalizado, ajustado às suas necessidades e objetivos, para uma alimentação saudável e sustentável.",
    },
    {
      icon: <FaWeight size={40} color="#fff" />,
      title: "Emagrecimento",
      description: "Emagrecimento saudável com foco em reeducação alimentar e hábitos duradouros, respeitando seu corpo e seu ritmo.",
    },
    {
      icon: <FaUtensils size={40} color="#fff" />,
      title: "Reeducação Alimentar",
      description: "Reeducação alimentar para transformar sua relação com a comida, priorizando equilíbrio, saúde e bem-estar a longo prazo.",
    },
    {
      icon: <FaCapsules size={40} color="#fff" />,
      title: "Suplementação Nutricional",
      description: "Suplementação nutricional adequada para potencializar seus resultados e garantir o equilíbrio de nutrientes essenciais ao seu corpo.",
    },
    {
      icon: <FaClinicMedical size={40} color="#fff" />,
      title: "Acompanhamento Pré e Pós-Operatório",
      description: "Acompanhamento nutricional especializado para garantir uma recuperação saudável e otimizar os resultados antes e depois da cirurgia.",
    },
  ];

  return (
    <Container>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <Icon>{card.icon}</Icon>
          <Title>{card.title}</Title>
          <Description>{card.description}</Description>
          <Button>Marcar Consulta</Button>
        </Card>
      ))}
    </Container>
  );
};

export default SectionCards;