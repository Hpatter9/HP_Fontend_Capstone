import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './layout.js';

jest.mock("../header/Header.js", () => () => <div>Mock Header</div>);
jest.mock("../footer/Footer.js", () => () => <div>Mock Footer</div>);

describe("Layout", () => {
    test("renders and checks the main area", () => {
      render(
        <Layout>
          <div>Test</div>
        </Layout>
      );
      
      // Check to see if the title is present
      const mainSection = screen.getByTestId('main');
      expect(mainSection).toBeInTheDocument();
      expect(mainSection.textContent).toBe("Test");

    });
  });