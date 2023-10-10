// Button.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('Button renders with the correct label', () => {
  const { getByText } = render(<Button label="Click me!" />);
  const buttonElement = getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();
});

test('Button fires onClick event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button label="Click me!" onClick={handleClick} />);
  const buttonElement = getByText(/Click me!/i);

  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
