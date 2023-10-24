import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials.js';
import { MemoryRouter } from "react-router-dom";

describe("Testimonials Section", () => {
    test("renders the testimonial section to make sure the cards render with content", () => {
      render(
        <MemoryRouter>
          <Testimonials />
        </MemoryRouter>
      );

      //check to see if the 3 cards are rendering with content
      const testimonialCardElement = screen.getAllByTestId('t-card');
      const tCardPic = screen.getAllByTestId('t-profilepic');
      const tCardRating = screen.getAllByAltText('Star Rating');
      const tCardName = screen.getAllByTestId('t-name');
      const tCardReview = screen.getAllByTestId('t-review')

      expect(testimonialCardElement).toHaveLength(3);
      expect(tCardPic).toHaveLength(3);
      expect(tCardRating).toHaveLength(3);
      expect(tCardName).toHaveLength(3);
      expect(tCardReview).toHaveLength(3);

    });
  });