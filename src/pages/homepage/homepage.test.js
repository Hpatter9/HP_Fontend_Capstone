import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Homepage from "./homepage.js";

jest.mock("../sections/about/About.js", () => () => <div data-testid="about-section"></div>);
jest.mock("../sections/cards/Card.js", () => () => <div data-testid="cards-section"></div>);
jest.mock("../sections/hero/Hero.js", () => () => <div data-testid="hero-section"></div>);
jest.mock("../sections/highlights/Highlights.js", () => () => <div data-testid="highlights-section"></div>);
jest.mock("../sections/testimonials/Testimonials.js", () => () => <div data-testid="testimonials-section"></div>);

test("Render the homepage with sections", () => {
  render(
    <MemoryRouter>
      <Homepage />
    </MemoryRouter>
  );

    //Check to see if all the sections render
    const homeAbout = screen.getByTestId('about-section');
    const homeHero = screen.getByTestId('hero-section');
    const homeCards = screen.getByTestId('cards-section');
    const homeHighlights = screen.getByTestId('highlights-section');
    const hometestimonials = screen.getByTestId('testimonials-section');

    expect(homeAbout).toBeInTheDocument();
    expect(homeHero).toBeInTheDocument();
    expect(homeCards).toBeInTheDocument();
    expect(homeHighlights).toBeInTheDocument();
    expect(hometestimonials).toBeInTheDocument();

});