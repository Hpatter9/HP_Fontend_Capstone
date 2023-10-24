import React from 'react';
import { render, screen } from '@testing-library/react';
import Highlights from './Highlights.js';
import { MemoryRouter } from "react-router-dom";

jest.mock("../../../components/Button/button", () => () => <button>Online Menu</button>);

describe("Highlights Section", () => {
    test("renders the highlights section to make sure the button and title work", () => {
      render(
        <MemoryRouter>
          <Highlights />
        </MemoryRouter>
      );
      
      // Check to see if the title is present
      const buttonElement = screen.getByText('Online Menu');
      expect(buttonElement).toBeInTheDocument();
      
      //check to see if the Button is present
      const highlightsTitle = screen.getByText("Specials");
      expect(highlightsTitle).toBeInTheDocument();

    });
  });