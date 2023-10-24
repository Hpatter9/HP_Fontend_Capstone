import React from "react";
import { render, screen } from "@testing-library/react";
import ReservationForm from "./reservationform.js";

//test to make sure the reservation form renders
test('renders reservationform component', () => {
    const mockOnFormSubmit = jest.fn();
    const mockDispatchOnDateChange = jest.fn();
    const availableTimes = ["15:00", "19:00", "21:30"];

    render  (
        <ReservationForm 
        onFormSubmit={mockOnFormSubmit}
        isFormSubmitted={false}
        availableTimes={availableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
        />
    );

    const selectDate = screen.getByText(/Date/i);
    expect (selectDate).toBeInTheDocument();

});
