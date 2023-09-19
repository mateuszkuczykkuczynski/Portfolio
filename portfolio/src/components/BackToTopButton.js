import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.3s;
  z-index: 1000;

  &:hover {
    background-color: #333;
  }
`;

const BackToTopButton = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return <Button show={show} onClick={handleClick}>↑</Button>;
};

export default BackToTopButton;
