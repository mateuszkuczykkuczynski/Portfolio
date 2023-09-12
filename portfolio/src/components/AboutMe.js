import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const AboutMeHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const AboutMeContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
`;

const AboutMeText = styled.p`
  font-size: 1rem;
  color: #333;
`;

const AboutMe = () => {
  const aboutMeDescription = `
    There will be text about me ;_;
  `;

  return (
    <AboutMeContainer>
      <AboutMeHeader>About Me</AboutMeHeader>
      <AboutMeContent>
        <AboutMeText>{aboutMeDescription}</AboutMeText>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
