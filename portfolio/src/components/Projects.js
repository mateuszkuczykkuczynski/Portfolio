import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ProjectsHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const ProjectCard = styled.div`
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

const ProjectTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Projects = () => {
  const projects = [
    {
      title: 'MovieShelf',
      description: 'Description for MovieShelf',
    },
    {
      title: 'BobTheCryptoBot',
      description: 'Description for BobTheCryptoBot.',
    },
    {
      title: 'Tableway',
      description: 'Description for Tableway',
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectsHeader>My Projects</ProjectsHeader>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
