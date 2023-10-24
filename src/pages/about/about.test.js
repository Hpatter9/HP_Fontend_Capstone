import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./about.js";

describe("About Page", () => {
  test("renders the UnderConstruction component", () => {
    render(<About />);
    
    const ucElement = screen.getByTestId("under-construction");
    expect(ucElement).toBeInTheDocument();
  });
});