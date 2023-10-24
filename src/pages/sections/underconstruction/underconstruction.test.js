import React from 'react';
import { render, screen } from '@testing-library/react';
import UnderConstruction from './underconstruction.js';
import { MemoryRouter } from "react-router-dom";

describe("UnderConstruction", () => {
    test("renders the UnderConstructon section", () => {
      render(
        <MemoryRouter>
          <UnderConstruction />
        </MemoryRouter>
      );

      //check to see if the page renders
      const ucElement = screen.getByTestId('under-construction');

      expect(ucElement).toBeInTheDocument();

    });
  });