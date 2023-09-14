import React, { useState } from 'react';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ResumeHeader = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const ResumeContent = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  text-align: center;
`;

const ResumeText = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #0066cc;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004499;
  }
`;

const Resume = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert(`Resume will be sent to: ${email}`);
  };

  return (
    <ResumeContainer>
      <ResumeHeader>My Resume</ResumeHeader>
      <ResumeContent>
        <ResumeText>Enter your email to receive my resume:</ResumeText>
        <EmailInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume;
