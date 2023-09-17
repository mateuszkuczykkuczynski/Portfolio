import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleInput = styled.input`
  display: none;
`;

const ToggleSlider = styled.span`
  position: relative;
  display: block;
  width: 50px;
  height: 24px;
  background-color: ${(props) => (props.isDarkMode ? '#333' : '#ccc')};
  border-radius: 12px;
  transition: background-color 0.3s;

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(props) => (props.isDarkMode ? '26px' : '2px')};
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;

const LightDarkToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#000';
    document.body.style.color = isDarkMode ? '#000' : '#fff';
  };

  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleInput type="checkbox" checked={isDarkMode} onChange={handleToggle} />
        <ToggleSlider isDarkMode={isDarkMode} />
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default LightDarkToggle;
