import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #D8DEE9;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #003c2a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TextContent = styled.h1`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
margin-bottom: 15px;
`


const AgendamentosForm = () => {
    const [nomePaciente, setNomePaciente] = useState('');
    const [emailPaciente, setEmailPaciente] = useState('');
    const [dataHora, setDataHora] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const agendamento = { nomePaciente, emailPaciente, dataHora, observacoes };
        await axios.post('http://localhost:8090/api/agendamentos', agendamento);
        alert('Agendamento criado com sucesso!');
    };

    return (
        <FormContainer>
            <TextContent>
                AGENDE SUA CONSULTA
            </TextContent>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Nome do Paciente"
                    value={nomePaciente}
                    onChange={(e) => setNomePaciente(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email do Paciente"
                    value={emailPaciente}
                    onChange={(e) => setEmailPaciente(e.target.value)}
                />
                <Input
                    type="datetime-local"
                    value={dataHora}
                    onChange={(e) => setDataHora(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Observações"
                    value={observacoes}
                    onChange={(e) => setObservacoes(e.target.value)}
                />
                <Button type="submit">Agendar</Button>
            </Form>
        </FormContainer>
    );
};

export default AgendamentosForm;