import React, { useState } from "react";
import "./reservationform.css";
import Button from "../Button/button.js";

const ReservationForm = ({
  onFormSubmit,
  isFormSubmitted,
  availableTimes,
  dispatchOnDateChange
}) => {
  const defaultTime = availableTimes[0];

  const [formValues, setFormValues] = useState({
    name: "",
    date: "",
    time: defaultTime,
    people: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "date") {
      dispatchOnDateChange(e.target.value);
    }
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const minGuest = 1;
  const maxGuest = 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form values
    if (!formValues.name || !formValues.date || !formValues.time || !formValues.people) {
      alert("Please fill out all of the required fields.");
      return;
    }

    // Submit the form
    onFormSubmit(e, formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="r-container">
        <label htmlFor="date" className="r-item-title">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.date ? "error" : ""}
          required
        />
      </div>
      <div className="r-container">
        <label htmlFor="name" className="r-item-title">
          Name
        </label>
        <input
          type="name"
          id="name"
          name="name"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.name ? "error" : ""}
          required
        />
      </div>
      <div className="r-container">
        <label htmlFor="time" className="r-item-title">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.time ? "error" : ""}
          required
        />
      </div>
      <div className="r-container">
        <label htmlFor="people" className="r-item-title">
          Number of Guests
        </label>
        <input
          type="number"
          id="people"
          name="people"
          onChange={handleInputChange}
          min={minGuest}
          max={maxGuest}
          className={isFormSubmitted && !formValues.people ? "error" : ""}
          required
        />
      </div>
      <div className="r-container">
        <label htmlFor="occasion" className="r-item-title">
          Special occasion
        </label>
        <select
          id="occasion"
          name="occasion"
          onChange={handleInputChange}
          className={isFormSubmitted && !formValues.occasion ? "error" : ""}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="graduation">Graduation</option>
          <option value="other">Other</option>
          <option value="none">None</option>
        </select>
      </div>
      <div>
        <Button title="Reserve Your Table" type="submit" />
      </div>
    </form>
  );
};

export default ReservationForm;
