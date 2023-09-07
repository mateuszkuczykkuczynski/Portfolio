import React from 'react';
import styled from 'styled-components';

const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const SocialLink = styled.a`
  color: #0a66c2; // LinkedIn blue color
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #0077b5; // LinkedIn blue hover color
  }

  &.github {
    color: #333; // GitHub color
    &:hover {
      color: #000; // GitHub hover color
    }
  }
`;

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialLink href="https://www.LinkedInTest.com" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </SocialLink>
      <SocialLink href="https://GithubTest.com" target="_blank" rel="noopener noreferrer" className="github">
        GitHub
      </SocialLink>
    </SocialsContainer>
  );
};

export default Socials;
