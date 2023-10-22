import React, { useState } from "react";
import './reservations.css'

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const occasionOptions = ["Birthday", "Anniversary", "Graduation", "Other", "Not sure"];
  const numberOfGuestsOptions = ["1", "2", "3", "4", "5"];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the reservation information to the backend server
    // here.

    // Clear the form after submission
    setName("");
    setDate("");
    setTime("");
    setOccasion("");
    setNumberOfGuests("");
  };

  return (
    <div className='reservation-container'>
      <h1 className='reservation-title'>Book a Table</h1>
      <form onSubmit={handleSubmit} className='reservation-form'>

        <div className='reservation-name'>
          <div className='reservation-name-title'>Name for reservation
          <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
          />
          </div>
        </div>

        <div className='reservation-date'>
          <div className='reservation-date-title'/>Date of reservation
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className='reservation-time'>
          <div className='reservation-time-title' />Time of reservation
          <input
            type="time"
            name="time"
            placeholder="Time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>

        <div className='reservation-occasion'>
          <div className='reservation-occasion-title' />Specail occasion
          <select
            name="occasion"
            value={occasion}
            onChange={(event) => setOccasion(event.target.value)}
          >
            {occasionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className='reservation-number'>
          <div className='reservation-number-title' /> Number of guests
          <select
            name="numberOfGuests"
            value={numberOfGuests}
            onChange={(event) => setNumberOfGuests(event.target.value)}
          >
            {numberOfGuestsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ReservationForm;
