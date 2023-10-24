import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "./menu.js";

describe("Menu Page", () => {
  test("renders the UnderConstruction component", () => {
    render(<Menu />);
    
    const ucElement = screen.getByTestId("under-construction");
    expect(ucElement).toBeInTheDocument();
  });
});