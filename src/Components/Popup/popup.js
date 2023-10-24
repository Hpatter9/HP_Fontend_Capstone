import React from 'react';
import "./popup.css";
import Button from "../Button/button.js";

const Popup = ({ title, message, onClose}) => {
    return (
        <>
            <div className = "popup-background" onClick={onClose}></div>
            <div className = 'popup'>
                <h2 className = 'popup-title'>{title}</h2>
                <p className = 'popup-message'>{message}</p>
                <div className='popup-button'>
                    <Button onClick={onClose} title="close"/>
                </div>
            </div>
        </>
    );
};

export default Popup;