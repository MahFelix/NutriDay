import { useState } from 'react';
import styled from 'styled-components';
import LogoND from '../assets/Camada-1.svg';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative; /* Necessário para posicionar o menu */
  background-color: #043647; /* Azul claro harmonioso */
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
  color: #EBC76D; /* Cinza escuro profissional */

  span {
    color: #EBC76D; /* Azul intermediário elegante */
  }
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: transparent; /* Fundo claro para contraste */
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
  color: #EBC76D; /* Cinza escuro para texto */
  font-size: 18px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #EBC76D ;
  background-color: #043647; /* Verde suave representando saúde */

  &:hover {
    color: #4c566a; /* Escurece no hover */
  }

  @media (max-width: 768px) {
    display: flex;
    background-color: #043647; /* Azul claro no mobile */
    width: 100%;
    margin-top: 4px;
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
        <NavLink href="#serviços"><strong>Planos Alimentares</strong></NavLink>
        <NavLink href="#sobre"><strong>Sobre</strong></NavLink>
        <NavLink href="#imc"><strong>Contato</strong></NavLink>
        <NavLink target='_blank' href="https://imcday.netlify.app/"><strong>Calcule seu IMC</strong></NavLink>
        <NavLink href="#faq"><strong>FAQ</strong></NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

export default Navbar;
