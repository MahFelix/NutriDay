import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: #f29f05;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #d88c04;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  
  if (email === 'nutri@email.com' && password === '2020') {
    localStorage.setItem('authToken', 'admin'); // Simulação de token
    navigate('/Agendamentolist');
    alert("Crecendial validada")
  } else {
    alert('Credenciais inválidas');
  }
};

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h2>Login Nutricionista</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
