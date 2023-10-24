import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button.js";

describe ("Button Component", ()=> {
    test("button renders with text", ()=> {
        const title = 'click here';
        render (<Button title={title} />);
        const buttonElement = screen.getByText('click here');
        expect(buttonElement).toBeInTheDocument();
    });

    test("makes sure onClick works", ()=> {
        const onClickMock = jest.fn();
        render (<Button title='click here' onClick={onClickMock} />);
        const buttonElement = screen.getByText("click here");
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('makes sure it only works when type = "submit"', () => {
        const onSubmitMock = jest.fn();
        render(
          <form onSubmit={onSubmitMock}>
            <Button title="Submit" type="button" />
          </form>
        );
    
        const buttonElement = screen.getByText("Submit");
        fireEvent.click(buttonElement);
        expect(onSubmitMock).not.toHaveBeenCalled();
        });
});