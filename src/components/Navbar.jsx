import { useState } from 'react';
import styled from 'styled-components';
import LogoND from '../assets/Camada 1.png';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative; /* Necessário para posicionar o menu */
  background-color:#00A091;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;


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
  color: #f69152;

  span {
    color: #f69152;
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: transparent;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1px 20px;
    margin-top: -5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.7s ease-in-out;
    
    
    
  
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding: 10px;
  border-radius: 6px;
  background-color: #F69152;
  
  &:hover {
    color: green;
  }

  @media (max-width: 768px) {
    display: flex;
   background-color: #00A091;
   width: 100%;
   border-radius: 14px;
   align-items: center;
   justify-content: center;

  
  
    
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
    setIsOpen(!isOpen);
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
        ☰ {/* Ícone do menu hambúrguer */}
      </HamburgerMenu>

      <NavLinkContainer isOpen={isOpen}>
        <NavLink href="#serviços">Planos Alimentares</NavLink>
        <NavLink href="#sobre">Sobre</NavLink>
        <NavLink href="#imc">Contato</NavLink>
        <NavLink target='_blank' href="https://imcday.netlify.app/">Calcule seu IMC</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

export default Navbar;
