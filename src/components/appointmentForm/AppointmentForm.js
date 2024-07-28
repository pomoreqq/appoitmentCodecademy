import React from "react";

import {ContactPicker} from '../contactPicker/ContactPicker'
const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  handleNameChange,
  handleContactChange,
  handleDateChange,
  handleTimeChange
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleNameChange} placeholder="Name" value={name}/>
      <input min={getTodayString()} type="date" onChange={handleDateChange} placeholder="Date" value={date}/>
      <input type="time" onChange={handleTimeChange} placeholder="Time" value={time}/>
      <ContactPicker 
        contacts={contacts} 
        onChange={handleContactChange} 
        value={contact}
        name="contact"
      />
      <button type="submit">Submit</button>
      </form>
    </>
  );
};
