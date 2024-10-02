import styled from 'styled-components';
import BGBG from '../assets/BGBG.jpg';
import { FaHeartbeat, FaAppleAlt, FaWeight, FaUtensils, FaCapsules, FaClinicMedical } from 'react-icons/fa';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px;
  background-color: #F8EAD9;
  background-image: url(${BGBG});

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #32a74d;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Icon = styled.div`
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: rotate(360deg);
  }
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

export const Button = styled.a` /* Alterando de button para a para criar um link */
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
  text-decoration: none; /* Remover sublinhado */
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2d9643;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: 20px;
  }
`;

const SectionCards = () => {
  const whatsappNumber = '5579996848609'; // Substitua pelo número de telefone da nutricionista
  const welcomeMessage = 'Olá! Seja bem-vindo(a) Sou Dayane Souza - Nutricionista. Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar de forma personalizada. Sinta-se à vontade para me enviar suas dúvidas ou agendar sua consulta.';

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
    <Container id='serviços'>
      {cardsData.map((card, index) => (
        <Card key={index}>
          <Icon>{card.icon}</Icon>
          <Title>{card.title}</Title>
          <Description>{card.description}</Description>
          <Button href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(welcomeMessage)}`}>Marcar Consulta</Button>
        </Card>
      ))}
    </Container>
  );
};

export default SectionCards;
