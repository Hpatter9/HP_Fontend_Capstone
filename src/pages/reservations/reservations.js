import {useReducer} from 'react';
import React, {useState} from 'react';
import './reservations.css'
import ReservationForm from '../../Components/Reservation Form/reservationform.js';
import {useNavigate} from 'react-router-dom';
import pages from '../../pages/pages.js';
import {fetchAPI} from '../../Components/Pretend API/API.js';
import Popup from '../../Components/Popup/popup.js';

const Reservations = () => {
  const[isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate= useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit =(e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initializeAvailableTimes) => [
    ...initializeAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

    return (
      <div className='r'>
        <div className='r-card'>
          <h1 className = 'r-title'>Reserve a Table</h1>
          <ReservationForm 
            availableTimes={availableTimes}
            dispatchOnDateChange={dispatchOnDateChange}
            onFormSubmit={handleFormSubmit}
            isFormSubmitted={isFormSubmitted}
            />
        </div>
        {isPopupVisible && (
          <Popup
            onclose={() => {
              setIsPopupVisible(false);
              navigate(pages.get('home').path);
            }}
            title='Reservation Submitted!'
            description="Thanks for choosing to dine with us at Little Lemon.  You will recieve a confirmation email soon with the details. See you soon!"
            />
        )}
      </div>
    );
};

export default Reservations;