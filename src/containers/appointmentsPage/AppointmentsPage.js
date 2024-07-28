import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name,setName] = useState('');
  const [contact,setContact] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleContactChange = (e) => {
    setContact(e.target.value)
  }
  const handleDateChange = (e) => {
    setDate(e.target.value)
  }
  const handleTimeChange = (e) => {
    setTime(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   addAppointment(name,contact,date,time)

   setName('');
   setContact('');
   setDate('');
   setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name}
          contact={contact}
          date={date}
          time={time}
          handleNameChange={handleNameChange}
          handleContactChange={handleContactChange}
          handleDateChange={handleDateChange}
          handleTimeChange={handleTimeChange}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};