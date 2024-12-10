import styled from 'styled-components';
import { FaHeartbeat, FaAppleAlt, FaWeight, FaUtensils, FaCapsules, FaClinicMedical } from 'react-icons/fa';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px;
  background-color: #d8dee9; /* Fundo claro harmonioso */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 20px;
    background-color: #d8dee9;
  }
`;

export const Card = styled.div`
  background-color: #a3be8c; /* Verde suave representando saúde */
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
    background-color: #88c0d0; /* Azul claro para o hover */
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Icon = styled.div`
  margin-bottom: 12px;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: rotate(360deg);
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #2e3440; /* Cinza escuro para contraste */
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #4c566a; /* Cinza suave para texto */
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.a`
  background-color: #5e81ac; /* Azul intermediário elegante */
  display: flex;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  color: white;
  width: 100%;
  max-width: 200px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a3be8c; /* Verde suave no hover */
    transform: scale(1.05);
    border: solid 1px;
    border-color: #88c0d0; /* Azul claro para a borda */
  }

  @media (max-width: 768px) {
    max-width: 180px;
    font-size: 14px;
  }
`;


const SectionCards = () => {
  const whatsappNumber = '5579996848609';
  const welcomeMessage =
    'Olá! Seja bem-vindo(a) Sou Dayane Souza - Nutricionista. Estou aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar de forma personalizada. Sinta-se à vontade para me enviar suas dúvidas ou agendar sua consulta.';

  const handleWhatsAppMessage = (title) => {
    const message = `${welcomeMessage} Estou interessado(a) no serviço: ${title}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

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
      description: "Plano alimentar ajustado às suas necessidades e objetivos, para uma alimentação saudável e sustentável.",
    },
    {
      icon: <FaWeight size={40} color="#fff" />,
      title: "Emagrecimento",
      description: "Emagrecimento saudável com foco em reeducação alimentar e hábitos duradouros, respeitando seu corpo e seu ritmo.",
    },
    {
      icon: <FaUtensils size={40} color="#fff" />,
      title: "Reeducação Alimentar",
      description: "Reeducação alimentar para transformar sua relação com a comida, priorizando equilíbrio e bem-estar.",
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
    <Container id="serviços">
      {cardsData.map((card, index) => (
        <Card key={index}>
          <Icon>{card.icon}</Icon>
          <Title>{card.title}</Title>
          <Description>{card.description}</Description>
          <Button
            href={handleWhatsAppMessage(card.title)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Marcar Consulta
          </Button>
        </Card>
      ))}
    </Container>
  );
};

export default SectionCards;

