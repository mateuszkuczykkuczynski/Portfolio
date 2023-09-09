import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>My Portfolio</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
