import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./login.js";

describe("Login Page", () => {
  test("renders the UnderConstruction component", () => {
    render(<Login />);
    
    const ucElement = screen.getByTestId("under-construction");
    expect(ucElement).toBeInTheDocument();
  });
});