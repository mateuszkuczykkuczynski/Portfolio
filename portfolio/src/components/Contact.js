import React from 'react';
import styled from 'styled-components';

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ContactMeHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const ContactMeContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
`;

const ContactMeText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

const EmailLink = styled.a`
  font-size: 1rem;
  color: #0066cc;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #004499;
  }
`;

const ContactMe = ({ email }) => {
  return (
    <ContactMeContainer>
      <ContactMeHeader>Contact Me</ContactMeHeader>
      <ContactMeContent>
        <ContactMeText>Feel free to reach out to me at:</ContactMeText>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
      </ContactMeContent>
    </ContactMeContainer>
  );
};

export default ContactMe;
