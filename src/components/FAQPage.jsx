/* eslint-disable react/prop-types */

import styled from 'styled-components';
import { useState } from 'react'; // Adicionado o useState
import BGBG from '../assets/BGBG.jpg'



// Estilos para o container principal
const Container = styled.div`
  width: 100%;
  background-color: #F8EAD9;
  padding: 20px;
  border-radius: 12px;
  background-image: url(${BGBG});
`;

// Estilos para o título
const Title = styled.h1`
  font-size: 50px;
  color: #1C244B;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

// Estilos para cada pergunta
const Question = styled.div`
  background-color: #5ECC97;
  color: white;
  padding: 15px 20px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #32a74d;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

// Estilos para a resposta
const Answer = styled.div`
  background-color: #fff;
  color: #1C244B;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: ${props => (props.isOpen ? 'block' : 'none')};
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false); // Controle do estado de abertura

  return (
    <>
      <Question onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>{isOpen ? '-' : '+'}</span> {/* Indicador de aberto ou fechado */}
      </Question>
      <Answer isOpen={isOpen}>
        {answer}
      </Answer>
    </>
  );
};

const FAQPage = () => {
  const faqData = [
    {
      question: 'As consultas são online?',
      answer: 'Sim, ofereço atendimentos tanto online quanto presenciais, garantindo a mesma qualidade e cuidado em ambos os formatos. A escolha entre consulta presencial ou online é sua, dependendo da sua preferência e conveniência.',
    },
    {
      question: 'Quantas consultas são necessárias?',
      answer: 'Para desafios gastrointestinais e crônicos, recomendamos planos de acompanhamento de 3 a 6 meses, adaptados às suas necessidades.',
    },
    {
      question: 'Aceita plano de saúde?',
      answer: 'Não, o atendimento é particular, mas fornecemos recibos para reembolso junto ao seu plano de saúde.',
    },
    {
      question: 'Tem retorno?',
      answer: 'Cada sessão é única e personalizada. Oferecemos um programa nutricional de 3 meses, que inclui consultas a um custo reduzido.',
    },
    {
      question: 'Quanto tempo dura cada consulta?',
      answer: 'As consultas duram entre 1h e 1h30min, variando conforme as necessidades do paciente.',
    },
    {
      question: 'Uma única consulta é suficiente para resolver meu problema?',
      answer: 'Normalmente, é necessário mais de uma consulta para resultados efetivos. A frequência será definida na primeira consulta.',
    },
    {
      question: 'Tudo o que eu como me faz mal, a consulta nutricional pode ajudar?',
      answer: 'O acompanhamento nutricional reorganiza a função intestinal, restabelece a saúde digestiva e reintroduz alimentos gradualmente.',
    },
  ];

  return (
    <Container id='faq'>
      <Title>Perguntas Frequentes</Title>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </Container>
  );
};

export default FAQPage;
