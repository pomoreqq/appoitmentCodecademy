import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  handleNameChange,
  handlePhoneChange,
  handleEmailChange
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" />
        <input type="email" value={email} onChange={handleEmailChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

