import { useState } from 'react';
import styled from 'styled-components';
import LogoND from '../assets/Camada-1.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 64px;
  position: relative;
  background-color: #043647;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #E6B845;

  span {
    color: #E6B845;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;

  

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    align-items: center;
    background-color: rgba(4, 54, 71, 0.164);
    width: 80%;
    padding: 10px 20px;
    margin-top: -20px;
    margin-right: 40px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.7s ease-in-out;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #E6B845;
  font-size: 18px;
  padding: 10px;
  border-radius: 6px;
  background-color: #043647;
  cursor: pointer;

  &:hover {
    color: #a58c4c;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 4px;
    border-radius: 14px;
    text-align: center;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Nav>
      <LogoContainer>
        <LogoImage src={LogoND} alt="Logo" />
        <Title>
          Dayane Souza
          <br />
          <span>Nutricionista</span>
        </Title>
      </LogoContainer>

      <HamburgerMenu onClick={toggleMenu}>
        ☰
      </HamburgerMenu>

      <NavLinkContainer isOpen={isOpen}>
        <NavLink href="#serviços"><strong>Planos alimentares</strong></NavLink>
        <NavLink href="#sobre"><strong>Sobre</strong></NavLink>
        <NavLink href="#imc"><strong>Contato</strong></NavLink>
        <NavLink target="_blank" href="https://imcday.netlify.app/"><strong>Calcule seu IMC</strong></NavLink>
        <NavLink href="#faq"><strong>Perguntas frequentes</strong></NavLink>
        <NavLink href='https://login-interface-phi.vercel.app/'><strong>Login</strong></NavLink> {/* Novo link de Login */}
      </NavLinkContainer>
    </Nav>
  );
};

export default Navbar;
