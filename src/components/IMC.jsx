import { useState } from 'react';
import styled from 'styled-components';
import BGBG from '../assets/BGBG.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: #F8EAD9;
  padding: 20px;
  background-image: url(${BGBG});
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const IMCApp = styled.div`
  background-color: #5ECC97;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  justify-content: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 20px;
  }
`;

const Form = styled.div`
  background-color: #5ECC97;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: none;
`;

const Button = styled.button`
  background-color: #3BC550;
  color: white;
  font-size: 18px;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #32a74d;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: white;
  font-size: 18px;
`;

const IMCInfo = styled.div`
  background-color: #f0f4f8;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  color: #1C244B;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

const IMCInfoText = styled.p`
  font-size: 17px;
`;

const IMCForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imcResult, setImcResult] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const calculateIMC = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Converter cm para metros
      const imc = (weight / (heightInMeters * heightInMeters)).toFixed(1); // Arredondando para uma casa decimal
      setImcResult(imc);
    }
  };

  const sendWhatsAppMessage = () => {
    const whatsappNumber = "5579996848609"; // Insira o número da nutricionista
    const whatsappMessage = `Olá! Meu nome é ${name}, tenho ${age} anos e meu IMC é ${imcResult}. Gostaria de conversar sobre isso.
    \nMensagem: ${message}`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Container id='imc'>
      <IMCApp>
        <Title>Calcule seu IMC</Title>
        <Label>Peso (kg):</Label>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Ex: 70"
        />
        <Label>Altura (cm):</Label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Ex: 170"
        />
        <Button onClick={calculateIMC}>Calcular IMC</Button>
        {imcResult && <p>Seu IMC é: {imcResult}</p>}
        
        {imcResult && (
          <IMCInfo>
            <IMCInfoText>
              <strong>Classificação de IMC:</strong><br />
              - Abaixo de 18.5: Abaixo do peso<br />
              - 18.5 a 24.9: Peso normal<br />
              - 25 a 29.9: Sobrepeso<br />
              - 30 a 34.9: Obesidade grau 1<br />
              - 35 a 39.9: Obesidade grau 2<br />
              - Acima de 40: Obesidade grau 3
            </IMCInfoText>
          </IMCInfo>
        )}
      </IMCApp>

      <Form>
        <Title>Formulário de Contato</Title>
        <Label>Nome Completo:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu nome"
        />
        <Label>Idade:</Label>
        <Input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Digite sua idade"
        />
        <Label>IMC:</Label>
        <Input
          type="text"
          value={imcResult}
          readOnly
        />
        <Label>Mensagem:</Label>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          placeholder="Escreva sua mensagem (OPCIONAL)"
        />
        <Button onClick={sendWhatsAppMessage}>Enviar para WhatsApp</Button>
      </Form>
    </Container>
  );
};

export default IMCForm;
