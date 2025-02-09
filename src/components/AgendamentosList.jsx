import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ListContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ListHeader = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const ListItem = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin: 0;
    color: #007bff;
  }

  p {
    margin: 5px 0;
    color: #555;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const EditButton = styled.button`
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e60000;
  }
`;

const EditForm = styled.form`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  input, textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const AgendamentosList = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [editing, setEditing] = useState(null); // Estado para controlar a edição
  const [formData, setFormData] = useState({
    nomePaciente: '',
    emailPaciente: '',
    dataHora: '',
    observacoes: ''
  });

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/agendamentos');
        setAgendamentos(response.data);
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error);
      }
      
    };

    fetchAgendamentos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8090/api/agendamentos/${id}`);
      setAgendamentos(agendamentos.filter((agendamento) => agendamento.id !== id));
    } catch (error) {
      console.error('Erro ao excluir agendamento:', error);
    }
  };

  const handleEditClick = (agendamento) => {
    setEditing(agendamento.id);
    setFormData({
      nomePaciente: agendamento.nomePaciente,
      emailPaciente: agendamento.emailPaciente,
      dataHora: agendamento.dataHora,
      observacoes: agendamento.observacoes
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8090/api/agendamentos/${editing}`, formData);
      setAgendamentos(agendamentos.map((agendamento) =>
        agendamento.id === editing ? { ...agendamento, ...formData } : agendamento
      ));
      setEditing(null);
    } catch (error) {
      console.error('Erro ao editar agendamento:', error);
    }
  };

  return (
    <ListContainer>
      <ListHeader>Agendamentos</ListHeader>
      {agendamentos.map((agendamento) => (
        <ListItem key={agendamento.id}>
          <h3>{agendamento.nomePaciente}</h3>
          <p><strong>Email:</strong> {agendamento.emailPaciente}</p>
          <p><strong>Data e Hora:</strong> {new Date(agendamento.dataHora).toLocaleString()}</p>
          <p><strong>Observações:</strong> {agendamento.observacoes}</p>
          <ButtonContainer>
            <EditButton onClick={() => handleEditClick(agendamento)}>Editar</EditButton>
            <DeleteButton onClick={() => handleDelete(agendamento.id)}>Excluir</DeleteButton>
          </ButtonContainer>
        </ListItem>
      ))}
      {editing && (
        <EditForm onSubmit={handleSubmitEdit}>
          <h3>Editar Agendamento</h3>
          <label>Nome do Paciente</label>
          <input
            type="text"
            name="nomePaciente"
            value={formData.nomePaciente}
            onChange={handleFormChange}
          />
          <label>Email do Paciente</label>
          <input
            type="email"
            name="emailPaciente"
            value={formData.emailPaciente}
            onChange={handleFormChange}
          />
          <label>Data e Hora</label>
          <input
            type="datetime-local"
            name="dataHora"
            value={formData.dataHora}
            onChange={handleFormChange}
          />
          <label>Observações</label>
          <textarea
            name="observacoes"
            value={formData.observacoes}
            onChange={handleFormChange}
          />
          <button type="submit">Salvar Alterações</button>
        </EditForm>
      )}
    </ListContainer>
  );
};

export default AgendamentosList;
