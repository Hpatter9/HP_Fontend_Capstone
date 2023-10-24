import React from "react";
import { render, screen } from "@testing-library/react";
import Order from "./order.js";

describe("Order Page", () => {
  test("renders the UnderConstruction component", () => {
    render(<Order />);
    
    const ucElement = screen.getByTestId("under-construction");
    expect(ucElement).toBeInTheDocument();
  });
});