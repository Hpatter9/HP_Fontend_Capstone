import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "./reservations.js";

jest.mock("../sections/about/About.js", () => () => <div data-testid="about-section"></div>);

test("Renders the reservation page", () => {
  render(
    <MemoryRouter>
      <Reservations />
    </MemoryRouter>
  );

    //Check to see if all the reservations page render
    const resPage = screen.getByTestId('res');

    expect(resPage).toBeInTheDocument();

});