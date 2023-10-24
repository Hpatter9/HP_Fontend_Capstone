import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './about';

test('should render the about title', () => {
  render(<About />);

  const title = screen.getByText('Little Lemon');
  expect(title).toBeInTheDocument();
});

test('should render the about location', () => {
  render(<About />);

  const location = screen.getByText('Chicago');
  expect(location).toBeInTheDocument();
});

test('should render the about images', () => {
  render(<About />);

  const images = screen.getAllByRole("img");

  expect(images.length).toBeGreaterThan(0);
});
