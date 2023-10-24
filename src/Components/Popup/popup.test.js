import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Popup from "./popup.js";

describe ("Popup Component", ()=> {
    const data = {
        title:'sample popup title',
        message:'sample popup message to let you know if it works',
    };

    //test to see if the popup renders with the title, message, and the button
    test ('renders the popup to make sure it all displays', () => {
        render (
            <Popup title={data.title} message={data.message} />
        );

        const popTitle = screen.getByText(data.title);
        const popMessage = screen.getByText(data.message);
        const popButton = screen.getByText('close');

        expect (popTitle).toBeInTheDocument();
        expect (popMessage).toBeInTheDocument();
        expect (popButton).toBeInTheDocument();
    });

    //test to see if the popup closes after clicking outside the box
    test ('makes sure the popup closes when clicking outside of it', ()=> {
        const onCloseMock = jest.fn();
        render (
            <Popup
                title={data.title}
                message={data.message}
                onClose = {onCloseMock}
            />
        );

        const clickTheOutside = screen.getByTestId('popBack');
        fireEvent.click(clickTheOutside);

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    //test to make sure the popup closes when clicking close
    test('popup closes on button click', ()=> {
        const onCloseMock = jest.fn();
        render (
            <Popup
                title={data.title}
                message={data.message}
                onClose={onCloseMock}
            />
        );

        const popButton = screen.getByText('close');
        fireEvent.click(popButton);

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    }); 

});
