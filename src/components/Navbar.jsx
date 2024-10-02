import styled from 'styled-components';
import LogoND from '../assets/Camada 1.png'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #FFE4B0;



  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #f69152;


  span {
    color: #1C244B;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 20px;


 
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 5px;
  border-radius: 6px;

  &:hover {
    color: green;
  }

`;


const Navbar = () => {

  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={LogoND} alt="Logo" />
        <Title>Dayane Souza<br></br><span> Nutricionista</span></Title>
      </LogoContainer>

      {/* Links de Navegação */}
      <NavLinkContainer >
        <NavLink href="#serviços">Serviços</NavLink>
        <NavLink href="#sobre">Sobre</NavLink>
        <NavLink href="#imc">Contato</NavLink>
        <NavLink href="#imc">Calcule seu IMC</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

export default Navbar;
