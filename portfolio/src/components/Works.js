import React from 'react';
import styled from 'styled-components';

const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const WorksHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const WorkCard = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 300px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #333;
`;

const WorkCompany = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #555;
`;

const WorkDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Works = () => {
  const works = [
    {
      title: 'Position One',
      company: 'Company One',
      description: 'Description of my first role ',
    },
    {
      title: 'Position Two',
      company: 'Company Two',
      description: 'Description of my second role',
    },
    {
      title: 'Position Three',
      company: 'Company Three',
      description: 'Description of my third (current one) role',
    },
  ];

  return (
    <WorksContainer>
      <WorksHeader>Where I've Worked</WorksHeader>
      {works.map((work, index) => (
        <WorkCard key={index}>
          <WorkTitle>{work.title}</WorkTitle>
          <WorkCompany>{work.company}</WorkCompany>
          <WorkDescription>{work.description}</WorkDescription>
        </WorkCard>
      ))}
    </WorksContainer>
  );
};

export default Works;
