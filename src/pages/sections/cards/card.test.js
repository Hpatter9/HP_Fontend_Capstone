import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.js';


test('should render the card image', () => {
  render(<Card />);

  const cardImage1 = screen.getByAltText('Greek Salad');
  const cardImage2 = screen.getByAltText('Bruchetta');
  const cardImage3 = screen.getByAltText('Lemon Dessert');

  expect(cardImage1).toBeInTheDocument();
  expect(cardImage2).toBeInTheDocument();
  expect(cardImage3).toBeInTheDocument();
});

test('should render the card title', () => {
  render(<Card />);

  const cardTitle1 = screen.getByText('Greek Salad');
  const cardTitle2 = screen.getByText('Bruchetta');
  const cardTitle3 = screen.getByText('Lemon Dessert');

  expect(cardTitle1).toBeInTheDocument();
  expect(cardTitle2).toBeInTheDocument();
  expect(cardTitle3).toBeInTheDocument();
});

test('should render the card price', () => {
  render(<Card />);

  const cardPrice1 = screen.getByText('$12.24');
  const cardPrice2 = screen.getByText('$6.22');
  const cardPrice3 = screen.getByText('$5.23');

  expect(cardPrice1).toBeInTheDocument();
  expect(cardPrice2).toBeInTheDocument();
  expect(cardPrice3).toBeInTheDocument();
});

test('should render the card description', () => {
  render(<Card />);

  const cardDescription1 = screen.getByText("The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.");
  const cardDescription2 = screen.getByText("This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.");
  const cardDescription3 = screen.getByText("Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.");

  expect(cardDescription1).toBeInTheDocument();
  expect(cardDescription2).toBeInTheDocument();
  expect(cardDescription3).toBeInTheDocument();
});

