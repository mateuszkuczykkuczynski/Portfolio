import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #333;
  color: #fff;
`;

const NavbarBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavbarMenu = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavbarItem = styled.li`
  list-style: none;
`;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarBrand>My Portfolio</NavbarBrand>
      <NavbarMenu>
        <NavbarItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/about">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/projects">Projects</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </NavbarItem>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
