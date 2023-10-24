import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './hero';
import { useNavigate } from "react-router-dom";

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

test('should render the hero title', () => {
  render(<Hero />);

  const title = screen.getByText('Little Lemon');
  expect(title).toBeInTheDocument();
});

test('should render the hero location', () => {
  render(<Hero />);

  const location = screen.getByText('Chicago');
  expect(location).toBeInTheDocument();
});

test('should render the reserve a table button', () => {
  render(<Hero />);

  const button = screen.getByText('Reserve a Table');
  expect(button).toBeInTheDocument();
});

