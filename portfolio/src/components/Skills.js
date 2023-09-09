import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const SkillsHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #333;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #333;
`;

const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'Python',
    'Django',
    'CSS',
    'HTML',
    'AWS',
    'Docker',

  ];

  return (
    <SkillsContainer>
      <SkillsHeader>My Skills</SkillsHeader>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

export default Skills;
